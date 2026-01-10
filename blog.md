---
layout: default
title: Blog
---

# Blog

This blog has two tracks:

<div class="grid">

<div class="card">
  <h3>Explainers</h3>
  <div style="color:#d7d7e0;">
    Public-facing posts that explain ideas in gravitation and astrophysics with intuition,
    visuals, and minimal jargon.
  </div>
</div>

<div class="card">
  <h3>Technical Notes</h3>
  <div style="color:#d7d7e0;">
    Notes with equations, derivations, and research-level discussion (GR, collapse, perturbations).
  </div>
</div>

<div class="card">
  <h3>Research Diary</h3>
  <div style="color:#d7d7e0;">
    Short updates on what I’m working on, what I learned, and interesting papers.
  </div>
</div>

</div>

---

## Recent Posts
{% for post in site.posts %}
<div class="card" style="margin-top:12px;">
  <div style="font-size:13px; color:#f4b860;">{{ post.date | date: "%b %d, %Y" }}</div>
  <h3 style="margin-top:6px; margin-bottom:6px;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
</div>
{% endfor %}
