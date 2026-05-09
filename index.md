---
layout: default
title: Home
---

<section class="hero-split">
  <div class="hero-copy">
    <p class="eyebrow">Jay Verma Trivedi · Astrophysics Researcher</p>
    <h1>Testing Extreme Gravity with Observable Physics</h1>
    <p class="lede">
      I study gravitational collapse, cosmic censorship, naked singularity geometries, and the
      astrophysical signatures that separate horizonless compact objects from standard black hole models.
      My current work connects strong-gravity theory to accretion, precession, and galaxy-scale feedback.
    </p>
    <div class="cta-row">
      <a class="btn-ghost" href="research.html">Research Program</a>
      <a class="btn-ghost" href="preprints.html">Papers and Preprints</a>
      <a class="btn-ghost" href="cv.html">Curriculum Vitae</a>
    </div>
    <div class="link-row">
      <a href="https://orcid.org/0000-0002-8064-082X">ORCID</a>
      <a href="https://arxiv.org/search/?searchtype=author&query=Trivedi%2C+J+V">arXiv</a>
      <a href="https://github.com/jayvermatrivedi">GitHub</a>
      <a href="https://www.linkedin.com/in/jay-verma-trivedi-306614140">LinkedIn</a>
    </div>
  </div>
</section>

<section class="card" style="margin-top: 22px;">
  <h2 style="margin-top:0;">Research Focus</h2>
  <div class="grid">
    <div>
      <h3>Compact Object Alternatives</h3>
      <p>Generalized JMN class models and horizon diagnostics for realistic collapse end states.</p>
    </div>
    <div>
      <h3>Observational Discriminants</h3>
      <p>Timelike geodesic precession, accretion behavior, and signatures relevant to black-hole mimickers.</p>
    </div>
    <div>
      <h3>Astrophysical Consequences</h3>
      <p>Implications of strong-gravity central engines for galaxy quenching and long-timescale evolution.</p>
    </div>
  </div>
</section>

<section class="card" style="margin-top: 18px;">
  <h2 style="margin-top:0;">Selected Publications</h2>
  <ul>
    <li><b>Generalized JMN Naked Singularity Models</b> (arXiv:2603.20676, 2026)</li>
    <li><b>Astrophysical Black holes: An Explanation for the Galaxy Quenching</b> (JHEAp 43, 100597, 2026)</li>
    <li><b>Gravitational collapse of scalar and vector fields</b> (Phys. Rev. D 108, 044049, 2023)</li>
    <li><b>Lense-Thirring effect and precession of timelike geodesics</b> (PDU 40, 101215, 2023)</li>
  </ul>
</section>

<section class="card" style="margin-top: 18px;">
  <h2 style="margin-top:0;">Latest Writing</h2>
  {% assign latest_posts = site.posts | slice: 0, 2 %}
  {% for post in latest_posts %}
  <article style="padding:10px 0; border-top: 1px solid rgba(187, 213, 235, 0.2);">
    <p class="eyebrow" style="margin: 0 0 4px;">{{ post.date | date: "%b %d, %Y" }}</p>
    <h3 style="margin:0 0 6px;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  </article>
  {% endfor %}
</section>
