---
layout: default
title: Blog
---

## Blog

This blog contains:
- **Explainers** for a general audience
- **Technical notes** on gravitation and astrophysics

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
