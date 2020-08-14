// var server = require("./server");
// var router = require("./router");

// server.start(router.route);
// 输出全局变量 __filename 的值
// console.log("__filename :"+ __filename );
// // 输出全局变量 __dirname 的值
// console.log( "__dirname :"+ __dirname );
console.log('Hello log');
console.info('Hello info');
console.error('Hello error');
console.log('Hello world');
console.trace();

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");

function printHello(

) {}
setTimeout(printHello, 2000);

console.timeEnd('获取数据');

console.info("程序执行完毕。")