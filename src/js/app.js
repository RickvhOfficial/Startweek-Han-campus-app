import { initChatbot } from "./chatbot.js";

function ensureFontAwesome() {
  if (document.getElementById("fa-cdn")) return;
  const link = document.createElement("link");
  link.id = "fa-cdn";
  link.rel = "stylesheet";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="/index.html"><strong>HAN</strong>Campus Arnhem</a>
      <nav class="header-actions">
        <a class="header-link" href="/pages/meldingen.html">
          <span class="icon-wrap"><i class="fa-solid fa-bell" aria-hidden="true"></i><span class="badge">2</span></span>
          Meldingen
        </a>
        <a class="header-link" href="/pages/profiel.html">
          <span class="icon-wrap"><i class="fa-solid fa-user" aria-hidden="true"></i></span>
          Profiel
        </a>
      </nav>
    </header>`;
}

function labels() {
  return `<div class="map-labels"><span>Ruitenberglaan</span><span>HAN Campus Arnhem</span><span>Presikhaaf →</span><span>Hangar R31 →</span></div>`;
}

export function pageShell(title) {
  document.title = title ? `${title} | HAN Campus Arnhem` : "HAN Campus Arnhem";
  const slot = document.getElementById("header-slot");
  if (slot) slot.outerHTML = header();
  else document.body.insertAdjacentHTML("afterbegin", header());
  if (!document.querySelector(".map-labels")) {
    document.body.insertAdjacentHTML("beforeend", labels());
  }
  initChatbot();
}

document.addEventListener("DOMContentLoaded", () => {
  ensureFontAwesome();
  const title = document.body.dataset.title || "";
  pageShell(title);
});
