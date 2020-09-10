/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();
const log4js = require("log4js");
const dbUtil = require("../db/dbUtil");
// config log4js
log4js.configure({
  appenders: {
    everything: {
      type: "file",
      filename: "../logs/sys.log",
      maxLogSize: 2048000
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "info"
    }
  }
});

// 查询用户列表
router.get("/getUserList",async (req, res) => {
    let queryObj = req.query;
    console.log(req.query);
    console.log(req.body);
    console.log(queryObj);
    //t_targetTable T_User
    let sqlStr="select *from t_targetTable";
    let result = await dbUtil.queryList(sqlStr);
    res.send(result);
});

// 增加用户接口
router.post("/insertUser",async (req, res) => {
    let model = {};
    for (let obj in req.body) {
        model = JSON.parse(obj);
        console.log(model);
    }
    console.log(req);
    console.log(req.body);
    console.log(model);
    let result = await dbUtil.insertModel(model);
    res.send(result);
});
 
module.exports = router;