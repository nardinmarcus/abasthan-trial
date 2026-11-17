const http = require('http');
const port = process.env.PORT || 8080;
const started = new Date().toISOString();
const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, started }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html><head><meta charset="utf-8"><title>Abasthan Trial</title></head>
<body style="font-family:system-ui;max-width:640px;margin:48px auto;padding:0 16px">
<h1>Abasthan free-tier trial — it works.</h1>
<p>A tiny zero-dependency Node.js web app, deployed as a genuine web service on Abasthan's Free plan (512 MB / 0.1 vCPU).</p>
<p>Started: ${started}</p>
<p>Health check: <a href="/health">/health</a></p>
</body></html>`);
});
server.listen(port, () => console.log(`listening on ${port}`));
