---
layout: default
title: Home
---

<div style="padding: 38px 0 20px 0;">
  <div style="font-size:14px; letter-spacing:1px; text-transform:uppercase; color:#f4b860;">
    Astrophysics · Gravitation · Cosmic Censorship
  </div>

  <h1 style="font-size:42px; margin-top:10px; margin-bottom:12px;">
    Jay Verma Trivedi
  </h1>

  <div style="max-width:720px; font-size:18px; line-height:1.6; color:#d7d7e0;">
    I study spacetime singularities, gravitational collapse, and their observational signatures —
    from gravitational waves to galaxy-scale phenomena.
  </div>
<div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap;">
  <a href="https://orcid.org/0000-0002-8064-082X" class="card" style="padding:10px 14px; border-radius:14px;">
    ORCID
  </a>

  <a href="https://www.linkedin.com/in/jay-verma-306614140" class="card" style="padding:10px 14px; border-radius:14px;">
    LinkedIn
  </a>

  <a href="https://scholar.google.com/" class="card" style="padding:10px 14px; border-radius:14px;">
    Google Scholar
  </a>

  <a href="https://github.com/" class="card" style="padding:10px 14px; border-radius:14px;">
    GitHub
  </a>
</div>

  <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap;">
    <a href="research.html" style="padding:10px 14px; border-radius:12px; background:rgba(138,180,248,0.14); border:1px solid rgba(138,180,248,0.25);">
      Explore Research →
    </a>
    <a href="blog.html" style="padding:10px 14px; border-radius:12px; background:rgba(244,184,96,0.12); border:1px solid rgba(244,184,96,0.25);">
      Read Blog →
    </a>
    <a href="cv.html" style="padding:10px 14px; border-radius:12px; background:rgba(186, 120, 255, 0.12); border:1px solid rgba(186,120,255,0.25);">
      View CV →
    </a>
  </div>
</div>

<hr/>

## Research Themes
- **Naked singularities & cosmic censorship**
- **Gravitational collapse dynamics**
- **Gravitational waves from strong-field gravity**
- **Galaxy quenching via accretion / compact objects**

## Latest Blog Posts
{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
