---
layout: page
title: Search
permalink: /search/
---

# Search

<input id="search-input" class="search-input" type="text" placeholder="Search blog posts..." />

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
      <div class="search-result">
        <div class="meta-label">${post.type}</div>
        <h3>
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
