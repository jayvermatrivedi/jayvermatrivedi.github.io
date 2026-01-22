---
layout: page
title: Search
permalink: /search/
---

# Search

<input id="search-input" type="text" placeholder="Search posts and pages..." style="
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
async function loadIndex() {
  const res = await fetch("/search.json");
  return res.json();
}

function renderResults(results, store) {
  const container = document.getElementById("search-results");
  if (!results.length) {
    container.innerHTML = "<div class='card'>No results found.</div>";
    return;
  }

  container.innerHTML = results.map(r => {
    const item = store[r.ref];
    return `
      <div class="card" style="margin-top:12px;">
        <div style="font-size:13px;color:#f4b860;">${item.type}</div>
        <h3 style="margin:6px 0 6px 0;">
          <a href="${item.url}">${item.title}</a>
        </h3>
        <div style="color:#d7d7e0;font-size:14px;">${item.excerpt || ""}</div>
      </div>
    `;
  }).join("");
}

(async () => {
  const store = await loadIndex();
  const idx = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("content");

    Object.values(store).forEach(doc => this.add(doc));
  });

  const input = document.getElementById("search-input");
  input.addEventListener("input", () => {
    const query = input.value.trim();
    if (!query) {
      document.getElementById("search-results").innerHTML = "";
      return;
    }
    const results = idx.search(query);
    renderResults(results, store);
  });
})();
</script>
