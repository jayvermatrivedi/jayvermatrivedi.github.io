---
layout: default
title: Blog
---

# Blog

This blog has two tracks:

<div class="grid">

<div class="card">
  <h3>Explainers</h3>
  <div class="muted">
    Public-facing posts that explain ideas in gravitation and astrophysics with intuition,
    visuals, and minimal jargon.
  </div>
</div>

<div class="card">
  <h3>Technical Notes</h3>
  <div class="muted">
    Notes with equations, derivations, and research-level discussion (GR, collapse, perturbations).
  </div>
</div>

<div class="card">
  <h3>Research Diary</h3>
  <div class="muted">
    Short updates on what I’m working on, what I learned, and interesting papers.
  </div>
</div>

</div>

---

## Recent Posts
<div class="section-stack">
{% for post in site.posts %}
<div class="card">
  <div class="meta-label">{{ post.date | date: "%b %d, %Y" }}</div>
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% if post.subtitle %}
  <div class="muted">{{ post.subtitle }}</div>
  {% endif %}
</div>
{% endfor %}
</div>
