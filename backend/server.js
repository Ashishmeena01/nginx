
const http = require("node:http");

const serverId = process.env.SERVER_ID || "unknown";

const server = http.createServer((req, res) => {
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
