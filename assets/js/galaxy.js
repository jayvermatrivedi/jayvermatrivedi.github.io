(() => {
  const canvas = document.getElementById("galaxy-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let w = 0;
  let h = 0;
  let dpr = 1;
  let scrollRot = 0;
  let impulse = 0;

  const dust = Array.from({ length: 180 }, () => ({
    a: Math.random() * Math.PI * 2,
    r: 0.2 + Math.random() * 0.8,
    t: Math.random() * 0.6,
    s: 0.0002 + Math.random() * 0.001
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

  function ring(cx, cy, rad, rot, width, colorA, colorB) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.scale(1, 0.34);

    const grad = ctx.createLinearGradient(-rad, 0, rad, 0);
    grad.addColorStop(0, colorA);
    grad.addColorStop(0.5, colorB);
    grad.addColorStop(1, colorA);

    ctx.strokeStyle = grad;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(0, 0, rad, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.79;
    const cy = h * 0.42;
    const rot = scrollRot + impulse;

    const haze = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(w, h) * 0.46);
    haze.addColorStop(0, "rgba(255,170,88,0.07)");
    haze.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = haze;
    ctx.fillRect(0, 0, w, h);

    ring(cx, cy, 280, rot * 0.45, 34, "rgba(126,195,255,0.04)", "rgba(255,196,130,0.36)");
    ring(cx, cy, 245, rot * 0.6 + 0.7, 24, "rgba(255,184,104,0.12)", "rgba(255,218,178,0.48)");
    ring(cx, cy, 210, rot * 0.78 + 1.4, 16, "rgba(126,195,255,0.18)", "rgba(255,168,96,0.40)");

    for (const d of dust) {
      d.a += d.s + impulse * 0.04;
      const rr = 130 + d.r * 235;
      const x = cx + Math.cos(d.a + rot * 0.8) * rr;
      const y = cy + Math.sin(d.a + rot * 0.8) * rr * 0.34;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,220,170,${0.06 + d.t})`;
      ctx.arc(x, y, 0.4 + d.t * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 118);
    glow.addColorStop(0, "rgba(255,230,190,0.28)");
    glow.addColorStop(0.5, "rgba(255,160,92,0.14)");
    glow.addColorStop(1, "rgba(255,160,92,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 118, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgba(1,1,2,0.99)";
    ctx.arc(cx, cy, 56, 0, Math.PI * 2);
    ctx.fill();

    impulse *= 0.93;
    requestAnimationFrame(draw);
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      scrollRot = window.scrollY * 0.0016;
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener("click", () => {
    impulse += 0.08;
  });

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
