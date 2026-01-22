---
layout: page
title: Search
permalink: /search/
---

# Search

<input id="search-input" type="text" placeholder="Search blog posts..." style="
  width:100%;
  padding:12px 14px;
  border-radius:14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: #e6e6eb;
  outline: none;
  font-size: 16px;
"/>

<div id="search-results" style="margin-top:16px;"></div>

<script src="https://unpkg.com/lunr/lunr.js"></script>
<script>
async function loadPosts() {
  const res = await fetch("/search.json");
  return res.json();
}

function renderResults(results, posts) {
  const container = document.getElementById("search-results");

  if (!results.length) {
    container.innerHTML = "<div class='card'>No results found.</div>";
    return;
  }

  container.innerHTML = results.map(r => {
    const post = posts[r.ref];
    return `
      <div class="card" style="margin-top:12px;">
        <div style="font-size:13px;color:#f4b860;">${post.type}</div>
        <h3 style="margin:6px 0 6px 0;">
          <a href="${post.url}">${post.title}</a>
        </h3>
      </div>
    `;
  }).join("");
}

(async () => {
  const posts = await loadPosts();

  // Create lunr index
  const idx = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("content");

    posts.forEach((p, i) => {
      p.id = i;
      this.add(p);
    });
  });

  const input = document.getElementById("search-input");

  input.addEventListener("input", () => {
    const query = input.value.trim();
    if (!query) {
      document.getElementById("search-results").innerHTML = "";
      return;
    }

    const results = idx.search(query);
    renderResults(results, posts);
  });
})();
</script>
