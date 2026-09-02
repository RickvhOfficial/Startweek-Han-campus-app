import { answerQuestion } from "./knowledge.js";

const chatIcon = `<i class="fa-solid fa-comments" aria-hidden="true"></i>`;

export function initChatbot() {
  if (document.querySelector(".chatbot")) return;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="chatbot">
      <div class="chat-window" id="chat-window" role="dialog" aria-label="Campus chatbot">
        <div class="chat-head">
          <div><strong>Campus-assistent</strong><small>Stel je vraag over de HAN</small></div>
          <button type="button" id="chat-close" aria-label="Sluiten"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="suggestions" id="chat-suggestions"></div>
        <form class="chat-form" id="chat-form">
          <input id="chat-input" autocomplete="off" placeholder="Typ je vraag..." />
          <button type="submit">Stuur</button>
        </form>
      </div>
      <button class="chat-toggle" id="chat-toggle" aria-label="Open chatbot">${chatIcon}</button>
    </div>`
  );

  const win = document.getElementById("chat-window");
  const toggle = document.getElementById("chat-toggle");
  const close = document.getElementById("chat-close");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const suggestions = document.getElementById("chat-suggestions");

  const add = (text, who) => {
    const el = document.createElement("div");
    el.className = `bubble ${who}`;
    el.innerHTML = text.replace(/\n/g, "<br>").replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>').replace(/(\/pages\/[a-z0-9\-]+\.html)/g, '<a href="$1">Open pagina</a>');
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  };

  const suggest = (items) => {
    suggestions.innerHTML = items.map((s) => `<button type="button">${s}</button>`).join("");
    suggestions.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => ask(btn.textContent));
    });
  };

  const ask = (text) => {
    add(text, "user");
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const res = answerQuestion(text);
      add(res.text, "bot");
      suggest(res.suggestions);
    }, 380 + Math.min(text.length * 8, 500));
  };

  toggle.addEventListener("click", () => {
    win.classList.toggle("open");
    if (win.classList.contains("open") && !messages.childElementCount) {
      add("Hoi! Ik help je met Brightspace, Osiris, Teams, Outlook, iSAS, ANS, MyX, studiepunten, de campus en hulplijnen. Wat wil je weten?", "bot");
      suggest(["Brightspace", "Rooster MyX", "Studiepunten", "Hulp bij problemen"]);
    }
    input.focus();
  });
  close.addEventListener("click", () => win.classList.remove("open"));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    input.value = "";
    ask(value);
  });
}
