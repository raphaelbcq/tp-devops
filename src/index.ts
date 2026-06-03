import http from "http"; 
const PORT = parseInt(process.env.PING_LISTEN_PORT ?? "3000", 10);
 
http.createServer((req, res) => {
 
  if (req.method === "GET" && req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.headers)); // retourne les headers en JSON
    return;
  }
 
res.writeHead(404);
res.end();
 
}).listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
