import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const port = Number(process.env.PORT) || 5173;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const clients = new Set();
const reloadScript = `<script>
(() => {
  const es = new EventSource("/__reload");
  es.onmessage = () => location.reload();
})();
</script>`;

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  if (clean === "/__reload") return { sse: true };
  let rel = clean === "/" ? "index.html" : clean.replace(/^\/+/, "");
  const abs = path.resolve(root, rel);
  if (!abs.toLowerCase().startsWith(root.toLowerCase())) return { forbidden: true };
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
    const index = path.join(abs, "index.html");
    if (fs.existsSync(index)) return { file: index };
  }
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return { file: abs };
  return { missing: true };
}

const server = http.createServer((req, res) => {
  const found = resolveFile(req.url || "/");
  if (found.forbidden) return send(res, 403, "Forbidden");
  if (found.sse) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write("\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  if (found.missing) return send(res, 404, "Niet gevonden");

  const ext = path.extname(found.file).toLowerCase();
  const type = mime[ext] || "application/octet-stream";
  let data = fs.readFileSync(found.file);
  if (ext === ".html") {
    const html = data.toString("utf8").replace("</body>", `${reloadScript}</body>`);
    return send(res, 200, html, type);
  }
  res.writeHead(200, { "Content-Type": type });
  res.end(data);
});

function broadcast() {
  for (const client of clients) client.write("data: reload\n\n");
}

function watch(dir) {
  fs.watch(dir, { recursive: true }, (_event, filename) => {
    if (!filename) return;
    if (String(filename).includes("node_modules")) return;
    clearTimeout(watch.t);
    watch.t = setTimeout(broadcast, 120);
  });
}

watch(root);
server.listen(port, "127.0.0.1", () => {
  console.log(`HAN Campus App: http://localhost:${port}`);
  console.log("Watch actief — sla een bestand op om te herladen.");
});
