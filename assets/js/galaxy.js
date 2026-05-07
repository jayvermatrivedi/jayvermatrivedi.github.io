(() => {
  const canvas = document.getElementById("galaxy-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let w = 0;
  let h = 0;
  let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  let scrollRotation = 0;
  let clickBoost = 0;

  const sparks = Array.from({ length: 140 }, () => ({
    r: Math.random(),
    a: Math.random() * Math.PI * 2,
    s: 0.0008 + Math.random() * 0.0015,
    z: 0.4 + Math.random() * 1.6,
    o: 0.15 + Math.random() * 0.45
  }));

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawDisk(cx, cy, t) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t);
    ctx.scale(1, 0.46);

    for (let i = 0; i < 34; i += 1) {
      const rr = 36 + i * 7;
      const alpha = Math.max(0, 0.22 - i * 0.0055);
      const grad = ctx.createRadialGradient(0, 0, rr * 0.3, 0, 0, rr);
      grad.addColorStop(0, `rgba(255, 235, 185, ${alpha * 0.9})`);
      grad.addColorStop(0.5, `rgba(255, 171, 86, ${alpha * 0.75})`);
      grad.addColorStop(1, `rgba(150, 105, 60, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(0, 0, rr, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.68;
    const cy = h * 0.42;
    const t = scrollRotation + clickBoost;

    const bg = ctx.createRadialGradient(cx, cy, 40, cx, cy, Math.max(w, h) * 0.7);
    bg.addColorStop(0, "rgba(12, 13, 17, 0.0)");
    bg.addColorStop(1, "rgba(1, 2, 3, 0.85)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    drawDisk(cx, cy, t);

    ctx.beginPath();
    ctx.fillStyle = "rgba(1, 1, 1, 0.98)";
    ctx.arc(cx, cy, 38, 0, Math.PI * 2);
    ctx.fill();

    const lens = ctx.createRadialGradient(cx, cy, 38, cx, cy, 95);
    lens.addColorStop(0, "rgba(255, 218, 160, 0.02)");
    lens.addColorStop(0.45, "rgba(255, 218, 160, 0.18)");
    lens.addColorStop(1, "rgba(255, 218, 160, 0)");
    ctx.fillStyle = lens;
    ctx.beginPath();
    ctx.arc(cx, cy, 95, 0, Math.PI * 2);
    ctx.fill();

    for (const s of sparks) {
      s.a += s.s + clickBoost * 0.05;
      const rr = 95 + s.r * 250;
      const x = cx + Math.cos(s.a + t * 0.5) * rr;
      const y = cy + Math.sin(s.a + t * 0.5) * rr * 0.48;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 214, 150, ${s.o})`;
      ctx.arc(x, y, s.z, 0, Math.PI * 2);
      ctx.fill();
    }

    clickBoost *= 0.92;
    requestAnimationFrame(draw);
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        scrollRotation = window.scrollY * 0.0013;
        ticking = false;
      });
    }
  }, { passive: true });

  window.addEventListener("click", () => {
    clickBoost += 0.08;
  });

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
