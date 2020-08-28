/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
//
const log4js = require('log4js');
const dbUtil = require('./dataaccess/dbUtil');

// config log4js
log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename: './logs/sys.log',
      maxLogSize: 2048000
    }
  },
  categories: {
    default: {
      appenders: ['everything'],
      level: 'info'
    }
  }
});

(async () => {
  //增
  // let insertresult = await dbUtil.insertModel({
  //   id: '11',
  //   name: 'test2',
  //   age: 28
  // }, 't_targetTable');
  // let results_1 = await dbUtil.query(`SELECT * FROM t_targetTable`);
  //改 updateObj, whereObj, tableNam
  // let updatesult = await dbUtil.updateModel({
  //   id: '11',
  //   name: 'test2test2',
  //   age: 2828
  // }, 't_targetTable', {
  //   id: '11',
  // });
  // let results_2 = await dbUtil.query(`SELECT * FROM t_targetTable`);
  // //删
  // let deleteresult = await dbUtil.deleteModel('t_targetTable', {
  //   id: '11',
  // });
  // let results_3 = await dbUtil.query(`SELECT * FROM t_targetTable`)

  // 查
  let queryresult = await dbUtil.queryModel('t_targetTable', {
    id: '1',
  });
  let objs = [{
    id: 1,
    name: "小明",
    age: 18
  }, {
    id: 2,
    name: "小红 ",
    age: 17
  }, {
    id: 3,
    name: "小强",
    age: 20
  }];
  let mergeresult = await dbUtil.mergeObjs("t_targetTable", objs, " AND T.id=S.id", ["id", "name", "age"], ["id", "name",
    "age"
  ], true);
  let results_4 = await dbUtil.query(`SELECT * FROM t_targetTable`)
})();