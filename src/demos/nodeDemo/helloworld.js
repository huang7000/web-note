/* eslint-disable no-console */
// eslint-disable-next-line no-console
// console.log("cd E:/userproject/web-note/src/demos/nodeDemo");
// console.log("node helloworld.js");
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
// var EventEmitter = require("events").EventEmitter;
// var event = new EventEmitter();
// // event.on("some_event", function () {
// //   console.log("some_event 事件触发");
// // });
// setTimeout(function () {
//   event.emit("error");
// }, 1000);

// const buf = Buffer.from("runoob2", "ascii");

// // 输出 72756e6f6f62
// console.log(buf.toString("hex"));

// // 输出 cnVub29i
// console.log(buf.toString("base64"));
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// //console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//     return value && value.type === "Buffer" ?
//         Buffer.from(value.data) :
//         value;
// });

// const copy2 = JSON.parse(json, (key, value) => {
//     if(value && value.type === "Buffer"){
//         console.log("true");
//         console.log(value);
//     }else{
//         console.log("false");
//         console.log(value);
//     }
//     return value;
// });
// 输出: <Buffer 01 02 03 04 05>
//console.log(copy);
//console.log(copy2);
// var buffer1 = Buffer.from('runoob');
// // 剪切缓冲区
// var buffer2 = buffer1.slice(0,2);
// console.log("buffer1 : " + buffer1.toString());//buffer1 : runoob
// console.log("buffer2 : " + buffer2.toString());//buffer2 : ru

// 裁剪
// var buffer_origin = Buffer.from('runoob');
// var buffer_slice = buffer_origin.slice(0,2);
// console.log("buffer slice content: "+buffer_slice.toString());
// console.log("buffer origin content: "+buffer_origin.toString());
// //buffer_slice.write("wirte"); // Write buffer slice

// // 裁剪前与原始字符串的改变
// console.log("buffer slice content: "+buffer_slice.toString());
// console.log("buffer origin content: "+buffer_origin.toString());

//引入fs模块
var fs =  require("fs")
//封装请求文件数据的函数
function getFileData(fileName){
 return new Promise(resolve=>{
    var readStream = fs.createReadStream(fileName)  
    readStream.setEncoding('UTF8')
    readStream.on("data",chunk=>resolve(chunk))
  })
}
//并发请求
Promise.all([getFileData("input.txt"),getFileData("output.txt")]).then(result=>{
   var writeStream = fs.createWriteStream("output.txt");
   //讲两个文件的内容重新再写入到output.txt中
   writeStream.write(result[0]+","+result[1],"UTF8");
   writeStream.end();
   //再获取output.txt文件的内容
   fs.readFile("output.txt",(err,content)=>console.log(content.toString()))
})