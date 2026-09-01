import { initChatbot } from "./chatbot.js";

const ICON = {
  bell: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>`,
  user: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.4-3.2 3.8-5 7-5s5.6 1.8 7 5"/></svg>`,
};

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="/index.html"><strong>HAN</strong>Campus App</a>
      <nav class="header-actions">
        <a class="header-link" href="/pages/meldingen.html">
          <span class="icon-wrap">${ICON.bell}<span class="badge">2</span></span>
          Meldingen
        </a>
        <a class="header-link" href="/pages/profiel.html">
          <span class="icon-wrap">${ICON.user}</span>
          Profiel
        </a>
      </nav>
    </header>`;
}

function labels() {
  return `<div class="map-labels"><span>Kapittelweg</span><span>HAN Hoofdingang</span><span>Nijmegen →</span><span>Entree E →</span></div>`;
}

export function pageShell(title) {
  document.title = title ? `${title} | HAN Campus App` : "HAN Campus App";
  const slot = document.getElementById("header-slot");
  if (slot) slot.outerHTML = header();
  else document.body.insertAdjacentHTML("afterbegin", header());
  if (!document.querySelector(".map-labels")) {
    document.body.insertAdjacentHTML("beforeend", labels());
  }
  initChatbot();
}

document.addEventListener("DOMContentLoaded", () => {
  const title = document.body.dataset.title || "";
  pageShell(title);
});
