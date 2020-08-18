// var server = require("./server");
// var router = require("./router");

// server.start(router.route);
// 输出全局变量 __filename 的值
// console.log("__filename :"+ __filename );
// // 输出全局变量 __dirname 的值
// console.log( "__dirname :"+ __dirname );
// console.log('Hello log');
// console.info('Hello info');
// console.error('Hello error');
// console.log('Hello world');
// console.trace();

// console.info("程序开始执行：");

// var counter = 10;
// console.log("计数: %d", counter);

// console.time("获取数据");

// function printHello(

// ) {}
// setTimeout(printHello, 2000);

// console.timeEnd('获取数据');

// console.info("程序执行完毕。")

// var http = require('http');
// var url = require('url');
// var util = require('util');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

// var http = require('http');
// var querystring = require('querystring');

// var postHTML =
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';

// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);
var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer(function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');