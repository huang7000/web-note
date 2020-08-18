var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(JSON.parse(data).data);
    res.end(data);
  });
})

//显示用户详情
app.get('/user/:id', function (req, res) {
  // 首先我们读取已存在的用户
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data).data;
    var user = data.find(user => user.id = req.params.id);
    console.log(user);
    res.end(JSON.stringify(user));
  });
})

//添加的新用户数据
var addUser = {
  "name": "add",
  "password": "add",
  "profession": "add",
  "id": 10
}

app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  let resData = {
    data: []
  };
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data).data;
    var user = data.find(user => user.id === addUser.id);
    if (user === null||user === undefined) {
      data.push(addUser);
    }
    resData.data = data;
    fs.writeFileSync(__dirname + "/" + "users.json", JSON.stringify(resData));
    res.end(JSON.stringify(data));
  });
  
})
//添加的新用户数据
var editUser = {
  "name": "name",
  "password": "password",
  "profession": "profession",
  "id": 1
}

app.get('/editUser', function (req, res) {
  // 读取已存在的数据
  let resData = {
    data: []
  };
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data).data;
    var user = data.find(user => user.id === editUser.id);
    if (user !== null) {
      data = data.map(item => item.id === editUser.id ? editUser : item)
    }
    resData.data = data;
    fs.writeFileSync(__dirname + "/" + "users.json", JSON.stringify(resData));
    res.end(JSON.stringify(data));

  });
})

app.get('/deleteUser/:id', function (req, res) {
  let resData = {
    data: []
  };
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data).data;
    var user = data.find(user => user.id === req.params.id);
    data = data.filter(user => user.id != req.params.id)
    resData.data = data;
    fs.writeFileSync(__dirname + "/" + "users.json", JSON.stringify(resData));
    res.end(JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://127.0.0.1:8081/", host, port);
});