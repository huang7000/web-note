/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// node 后端服务器入口

const express = require("express");
const userApi = require("./api/userApi");
const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});
//userapi
app.use("/api/userApi", userApi);
app.use('/api', (req, res) => {
    res.send("server/app.js");
});
// 监听端口
app.listen(7000);
console.log("http://localhost:7000/api");