(() => {
  const canvas = document.getElementById("galaxy-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let width = 0;
  let height = 0;
  let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

  const stars = [];
  const STAR_COUNT = 280;
  let baseRotation = 0;
  let boost = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (stars.length === 0) {
      for (let i = 0; i < STAR_COUNT; i += 1) {
        const arm = i % 2 === 0 ? 1 : -1;
        const radius = Math.pow(Math.random(), 0.65);
        stars.push({
          arm,
          radius,
          angle: Math.random() * Math.PI * 2,
          size: 0.4 + Math.random() * 2.1,
          alpha: 0.15 + Math.random() * 0.85,
          hue: 190 + Math.random() * 65,
          speed: 0.0004 + Math.random() * 0.0012
        });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.52;
    const maxR = Math.min(width, height) * 0.5;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(baseRotation);

    for (const s of stars) {
      const twist = s.arm * s.radius * 5.2;
      const theta = s.angle + twist;
      const r = s.radius * maxR;
      const jitter = (1 - s.radius) * 16;
      const x = Math.cos(theta) * r + (Math.random() - 0.5) * jitter;
      const y = Math.sin(theta) * r * 0.55 + (Math.random() - 0.5) * jitter;

      ctx.beginPath();
      ctx.fillStyle = `hsla(${s.hue}, 90%, 78%, ${s.alpha})`;
      ctx.arc(x, y, s.size, 0, Math.PI * 2);
      ctx.fill();

      s.angle += s.speed + boost;
    }

    const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR * 0.24);
    coreGlow.addColorStop(0, "rgba(255, 245, 210, 0.20)");
    coreGlow.addColorStop(1, "rgba(255, 245, 210, 0)");
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(0, 0, maxR * 0.24, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    boost *= 0.92;
    requestAnimationFrame(draw);
  }

  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        baseRotation = y * 0.0007;
        boost += 0.00045;
        scrollTicking = false;
      });
    }
  }, { passive: true });

  window.addEventListener("click", () => {
    boost += 0.003;
  });

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
