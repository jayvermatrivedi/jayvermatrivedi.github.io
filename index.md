---
layout: default
title: Home
---

<div class="card" style="
  padding: 26px 22px;
  border-radius: 22px;
  background: linear-gradient(135deg,
    rgba(138,180,248,0.14),
    rgba(186,120,255,0.10),
    rgba(244,184,96,0.06)
  );
  border: 1px solid rgba(255,255,255,0.10);
">

  <div style="font-size:14px; letter-spacing:1px; text-transform:uppercase; color:#f4b860;">
    Astrophysics · Gravitation · Cosmic Censorship
  </div>

  <h1 style="font-size:44px; margin-top:10px; margin-bottom:10px;">
    Jay Verma Trivedi
  </h1>

  <div style="max-width:760px; font-size:18px; line-height:1.6; color:#e6e6eb;">
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
    <a href="research.html" style="padding:10px 14px; border-radius:12px; background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.14);">
      Explore Research →
    </a>
    <a href="blog.html" style="padding:10px 14px; border-radius:12px; background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.14);">
      Read Blog →
    </a>
    <a href="cv.html" style="padding:10px 14px; border-radius:12px; background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.14);">
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
