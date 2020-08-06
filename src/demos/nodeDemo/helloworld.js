/* eslint-disable no-console */
// eslint-disable-next-line no-console
// console.log("cd E:/userproject/web-note/src/demos/nodeDemo");
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 8080;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello world");
// });

// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// });
//event.js 文件
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// // event.on('some_event', function () {
// //   console.log('some_event 事件触发');
// // });
// setTimeout(function () {
//   event.emit('error');
// }, 1000);

const buf = Buffer.from('runoob2', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));