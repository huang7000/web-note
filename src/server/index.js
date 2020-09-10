/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
//
const log4js = require('log4js');
const dbUtil = require('./dbSQL/dbUtil');
const mssql = require('mssql');
// config log4js
log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename: '../logs/sys.log',
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
  //查询
  // let results_list = await dbUtil.queryList(`SELECT * FROM t_targetTable WHERE 1=1 AND AGE>@AGE`,{AGE:"20"});
  // console.log(results_list);
  //分页查询
  // let results_page = await dbUtil.queryListPage(`SELECT * FROM t_targetTable WHERE 1=1 AND AGE>@AGE`,{AGE:"1"},"AGE",2,2);
  // console.log(results_page);
  //增
  // let results_insert = await dbUtil.insertModel({
  //   studentId:null,
  //   studentNo: 'test2',
  //   studentName: '李彩霞',
  //   studentAge: 28
  // }, 't_Student', {
  //   studentId: "NEWID()"
  // });
  // console.log(results_insert);
  //改 model, tableName, whereStr,whereParam,defObj
  // let results_update = await dbUtil.updateModel({
  //   id: '11',
  //   name: 'test2test2',
  //   age: 2828
  // }, 't_targetTable', " where id=@whereid ", {
  //   whereid: 11
  // });
  // console.log(results_update);

  // //删
  // let results_delete = await dbUtil.deleteList('delete from t_targetTable where id=@id', {
  //   id: '11',
  // });
  // console.log(results_delete)
  // 查询实体 
  //  let results_model = await dbUtil.queryModel('select * from t_targetTable where id>@id', {
  //   id: '1',
  // });
  // console.log(results_model)
  let objs = [{
      id: '1',
      name: 'test1',
      age: 11
    }, {
      id: '2',
      name: 'test2',
      age: 12
    },
    {
      id: '3',
      name: 'test3',
      age: 13
    }, {
      id: '5',
      name: 'test5',
      age: 15
    },
    {
      id: '13',
      name: 'test13',
      age: 23
    }
  ]
  //primary: true
  let columns=[
    {name:"id",type:mssql.Int,remark:{nullable:true}},
    {name:"name",type:mssql.VarChar(50),remark:{nullable:true}},
    {name:"age",type:mssql.Int,remark:{nullable:true}}
  ]
  // let results_mergeObjs = await dbUtil.mergeObjs("t_targetTable", objs, " AND T.id=S.id", ["id", "name", "age"], ["id", "name",
  //   "age"
  // ], true,);
  // let results_merge = await dbUtil.merge(results_mergeObjs);
  // console.log(results_merge)
  let results_mergeTemp = await dbUtil.mergeTemp([],[],"t_targetTable", objs,columns, " AND T.id=S.id", ["id", "name", "age"], ["id", "name",
    "age"
  ], true, );
  console.log(results_mergeTemp)
  // let results_mergeSql = await dbUtil.mergeSql("t_targetTable","UserInfoTest", " AND T.id=S.id", ["id", "name", "age"], ["id", "name",
  //   "age"
  // ], true, );
  // console.log(results_mergeSql)
  // let results_4 = await dbUtil.query(`SELECT * FROM t_targetTable`)

  // let sqlObjs = [{
  //   sql: "update t_targetTable set age=age+'100' where id=2;"
  // }, {
  //   sql: "update t_targetTable set age=age+'a1' where id=1;"
  // }]
  // let results_5 = await dbUtil.transaction(sqlObjs)
  //console.log(results_5);
  // let results_6 = await dbUtil.transaction(`SELECT * FROM t_targetTable2`)
  // console.log(results_6);
  //存储过程
  // let results_7 = await dbUtil.execute(`proc_targetTable`,{name:"小明"})
  // console.log(results_7);
})();