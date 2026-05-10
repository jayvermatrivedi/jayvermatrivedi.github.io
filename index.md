---
layout: default
title: Home
---

<section class="hero-split">
  <div class="hero-copy">
    <p class="eyebrow">Jay Verma Trivedi · Astrophysics Researcher</p>
    <h1><span>Observational Aspects</span><span>of Singularities</span></h1>
    <p class="lede">
      My current research focuses on observational diagnostics of gravitational collapse end states:
      black hole versus naked singularity scenarios, generalized JMN geometries, shadow structure,
      accretion-disk spectra, and feedback mechanisms linked to galaxy quenching.
    </p>
    <div class="cta-row">
      <a class="btn-ghost" href="research.html">Research Program</a>
      <a class="btn-ghost" href="preprints.html">Papers and Preprints</a>
      <a class="btn-ghost" href="cv.html">Curriculum Vitae</a>
      <a class="btn-ghost" href="blog.html">Writing</a>
    </div>
    <div class="profile-row">
      <a class="profile-chip" href="https://orcid.org/0000-0002-8064-082X">ORCID</a>
      <a class="profile-chip" href="https://arxiv.org/search/?searchtype=author&query=Trivedi%2C+J+V">arXiv</a>
      <a class="profile-chip" href="https://scholar.google.com/citations?user=q2oLWJsAAAAJ">Google Scholar</a>
      <a class="profile-chip" href="https://github.com/jayvermatrivedi">GitHub</a>
      <a class="profile-chip" href="https://www.linkedin.com/in/jay-verma-trivedi-306614140">LinkedIn</a>
      <a class="profile-chip" href="https://medium.com/@jayverma4455">Medium</a>
    </div>
  </div>

  <aside class="hero-panel">
    <p class="eyebrow">Current Position</p>
    <h2>PhD Research Scholar</h2>
    <p>International Centre for Space and Cosmology, Ahmedabad University.</p>
    <p><strong>Advisor:</strong> Prof. Pankaj S. Joshi</p>
    <p><strong>Current themes:</strong> gravitational collapse, compact-object diagnostics, thin-disk spectra, and feedback signatures.</p>
    <div class="action-row">
      <a class="action-link" href="CV_Jay_Verma_Trivedi.pdf">Download CV</a>
      <a class="action-link" href="contact.html">Contact</a>
    </div>
  </aside>
</section>

<div class="section-stack">
<section class="card">
  <h2>Research Focus</h2>
  <div class="grid">
    <div>
      <h3>Generalized JMN Models</h3>
      <p>Robustness tests of naked-singularity equilibrium spacetimes with density inhomogeneity.</p>
    </div>
    <div>
      <h3>Observational Discriminants</h3>
      <p>Shadow formation and thin-disk emission as measurable signatures distinguishing compact-object classes.</p>
    </div>
    <div>
      <h3>Galaxy-Scale Implications</h3>
      <p>Accretion-driven outflows and feedback from astrophysical black-hole models for quenching phenomena.</p>
    </div>
  </div>
</div>

<section class="grid grid-2">
  <div class="card">
    <h2>Selected Publications</h2>
  <ul>
    <li><b>Generalized JMN Naked Singularity Models</b> (arXiv:2603.20676, 2026)</li>
    <li><b>Astrophysical Black holes: An Explanation for the Galaxy Quenching</b> (JHEAp 43, 100597, 2026)</li>
    <li><b>Gravitational collapse of scalar and vector fields</b> (Phys. Rev. D 108, 044049, 2023)</li>
    <li><b>Lense-Thirring effect and precession of timelike geodesics</b> (PDU 40, 101215, 2023)</li>
  </ul>
  </div>

  <div class="card">
    <h2>Academic Snapshot</h2>
    <ul class="list-compact">
      <li>Research area: general relativity, collapse physics, black-hole mimickers, and observational astrophysics.</li>
      <li>Institution: Ahmedabad University.</li>
      <li>Recent work includes generalized JMN geometries and galaxy-quenching mechanisms.</li>
      <li>Public writing spans research explainers, technical notes, and science communication essays.</li>
    </ul>
  </div>
</section>

<section class="card">
  <h2>Latest Writing</h2>
  {% assign latest_posts = site.posts | slice: 0, 2 %}
  {% for post in latest_posts %}
  <article class="search-result">
    <p class="meta-label">{{ post.date | date: "%b %d, %Y" }}</p>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    {% if post.subtitle %}
    <p class="muted">{{ post.subtitle }}</p>
    {% endif %}
  </article>
  {% endfor %}
</section>
</section>
