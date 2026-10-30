
const http = require("node:http");

const serverId = process.env.SERVER_ID || "unknown";

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", server: serverId }));
    return;
  }

  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json", Allow: "GET" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: `Hello from the ${serverId} !`,
      server: serverId,
      path: req.url,
      time: new Date().toISOString(),
    })
  );
});

server.listen(3000, "0.0.0.0", () => {
  console.log(`Backend ${serverId} listening on port 3000`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    console.log(`${serverId} received ${signal}; closing server`);
    server.close(() => process.exit(0));
  });
}
