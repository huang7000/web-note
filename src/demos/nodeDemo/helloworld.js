/* eslint-disable no-console */
// eslint-disable-next-line no-console
console.log("cd E:/userproject/web-note/src/demos/nodeDemo");
const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});