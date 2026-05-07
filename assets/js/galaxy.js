(() => {
  const canvas = document.getElementById("galaxy-bg");
  if (!canvas || !window.THREE) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, 16);

  const root = new THREE.Group();
  root.position.set(6.8, 1.6, -6);
  root.rotation.set(0.26, 0.18, -0.08);
  scene.add(root);

  const ambient = new THREE.AmbientLight(0x8fb8ff, 0.45);
  scene.add(ambient);

  const key = new THREE.PointLight(0xffbf83, 2.1, 80, 1.5);
  key.position.set(3, 1.5, 4);
  root.add(key);

  const fill = new THREE.PointLight(0x7ec5ff, 0.85, 100, 2);
  fill.position.set(-5, -1, -2);
  root.add(fill);

  const hole = new THREE.Mesh(
    new THREE.SphereGeometry(1.75, 64, 64),
    new THREE.MeshBasicMaterial({ color: 0x020202 })
  );
  root.add(hole);

  function buildDiskTexture(size, outerAlpha) {
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d");

    const cx = size / 2;
    const cy = size / 2;
    const inner = size * 0.22;
    const outer = size * 0.49;

    const base = ctx.createRadialGradient(cx, cy, inner, cx, cy, outer);
    base.addColorStop(0, "rgba(255, 217, 168, 0)");
    base.addColorStop(0.18, "rgba(255, 214, 150, 0.9)");
    base.addColorStop(0.55, "rgba(255, 166, 95, 0.55)");
    base.addColorStop(1, `rgba(55, 30, 15, ${outerAlpha})`);

    ctx.fillStyle = base;
    ctx.beginPath();
    ctx.arc(cx, cy, outer, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < 1200; i += 1) {
      const t = Math.random() * Math.PI * 2;
      const r = inner + Math.random() * (outer - inner);
      const x = cx + Math.cos(t) * r;
      const y = cy + Math.sin(t) * r;
      const a = 0.05 + Math.random() * 0.16;
      ctx.fillStyle = `rgba(255, ${150 + Math.floor(Math.random() * 80)}, ${90 + Math.floor(Math.random() * 70)}, ${a})`;
      ctx.fillRect(x, y, 1.4, 1.4);
    }

    return new THREE.CanvasTexture(c);
  }

  const diskTexA = buildDiskTexture(1024, 0.02);
  const diskTexB = buildDiskTexture(1024, 0.01);

  function ringMesh(inner, outer, tex, opacity) {
    return new THREE.Mesh(
      new THREE.RingGeometry(inner, outer, 256),
      new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
  }

  const diskA = ringMesh(2.2, 6.7, diskTexA, 0.92);
  diskA.rotation.x = 1.24;
  root.add(diskA);

  const diskB = ringMesh(2.45, 7.6, diskTexB, 0.35);
  diskB.rotation.x = 1.24;
  diskB.rotation.z = 0.2;
  root.add(diskB);

  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: (() => {
        const c = document.createElement("canvas");
        c.width = 512;
        c.height = 512;
        const ctx = c.getContext("2d");
        const g = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
        g.addColorStop(0, "rgba(255,220,180,0.35)");
        g.addColorStop(0.35, "rgba(255,170,110,0.18)");
        g.addColorStop(1, "rgba(255,170,110,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 512, 512);
        return new THREE.CanvasTexture(c);
      })(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  halo.scale.set(8.5, 8.5, 1);
  root.add(halo);

  const starsGeo = new THREE.BufferGeometry();
  const STAR_COUNT = 900;
  const positions = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i += 1) {
    const r = 26 + Math.random() * 94;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 36;
    positions[i * 3 + 0] = Math.cos(a) * r;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(a) * r - 30;
  }
  starsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const stars = new THREE.Points(
    starsGeo,
    new THREE.PointsMaterial({
      color: 0xaed7ff,
      size: 0.14,
      transparent: true,
      opacity: 0.52,
      depthWrite: false
    })
  );
  scene.add(stars);

  let scrollY = window.scrollY || 0;
  let clickBoost = 0;

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth < 900) {
      root.position.set(2.6, 1.2, -5.8);
      camera.position.set(0, 0, 17.2);
    } else {
      root.position.set(6.8, 1.6, -6);
      camera.position.set(0, 0, 16);
    }
  }

  window.addEventListener("resize", onResize);
  onResize();

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY || 0;
  }, { passive: true });

  window.addEventListener("click", () => {
    if (!reduceMotion) clickBoost += 0.06;
  });

  const clock = new THREE.Clock();

  function tick() {
    const t = clock.getElapsedTime();
    const scrollFactor = Math.min(1.5, scrollY / 1400);

    const baseSpeed = reduceMotion ? 0.0008 : 0.0035;
    const speed = baseSpeed + scrollFactor * 0.003 + clickBoost * 0.055;

    diskA.rotation.z += speed;
    diskB.rotation.z += speed * 0.86;
    root.rotation.y = 0.16 + scrollFactor * 0.22;
    root.rotation.x = 0.24 + Math.sin(t * 0.15) * 0.02;

    halo.material.opacity = 0.45 + Math.sin(t * 1.2) * 0.05 + clickBoost * 0.3;
    stars.rotation.y += reduceMotion ? 0.00012 : 0.00035;

    clickBoost *= 0.92;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  tick();
})();
