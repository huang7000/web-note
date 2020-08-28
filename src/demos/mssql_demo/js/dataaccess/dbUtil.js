/* eslint-disable no-dupe-args */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const mssql = require("mssql");
const log4js = require("log4js");
const logger = log4js.getLogger("dbUtil");
var connConfig = require("../dbconfig.json");
mssql.on('error', err => {
    // ... error handler
    logger.error(err);
});
let connectionPool;

let getConnection = async function () { //连接数据库
    if (!(connectionPool && connectionPool.connected)) {
        connectionPool = await mssql.connect(connConfig);
    }
    return connectionPool;
}
//执行query
let query = async function (sql, params) { //写sql语句自由查询
    await mssql.close(); // close
    let pool = await getConnection();
    let request = pool.request();
    if (params) {
        //这种不严谨、
        for (let index in params) {
            request.input(index, params[index]);
        }
    }
    let result = await request.query(sql);
    await mssql.close(); // close
    return result;
};
// 查询列表集合
let queryList = async function (sql, params) { //写sql语句自由查询
    let result = await query(sql, params);
    return result;
};

// 查询列表集合
let queryModel = async function (tableName, whereObj) {
    let connection = await getConnection();
    let request = connection.request();
    let sql = `SELECT * FROM ${tableName} WHERE 1=1 `;
    if (typeof whereObj === "object" && whereObj !== {}) {
        for (let index in whereObj) {
            if (typeof whereObj[index] === "number") {
                request.input(index + 'Where', whereObj[index]);
            } else if (typeof whereObj[index] === "string") {
                request.input(index + 'Where', whereObj[index]);
            }
            sql += ` AND ${index} = @${index}Where`
        }
    }
    let result = await request.query(sql);
    await mssql.close(); // close
    if (Array.isArray(result.recordset) && result.recordset.length > 0) {
        return result.recordset[0]
    } else {
        return null;
    }
};

//添加数据判断是否存在
let insertModel = async function (addObj, tableName, whereObj) { //添加数据
    if (!addObj) {
        return;
    }
    let connection = await getConnection();
    let request = connection.request();
    let sql = `BEGIN
    IF NOT EXISTS (SELECT 1 FROM ${tableName} WHERE 1 > 0`;
    if (typeof whereObj === "object" && whereObj !== {}) {
        for (let index in whereObj) {
            if (typeof addObj[index] === "number") {
                request.input(index + 'Where', whereObj[index]);
            } else if (typeof addObj[index] === "string") {
                request.input(index + 'Where', whereObj[index]);
            }
            sql += ` AND ${index} = @${index}Where`
        }
    } else {
        sql += ` AND 1>2`
    }
    sql += ')';
    sql += 'BEGIN ';
    sql += "INSERT INTO " + tableName + "(";
    for (let index in addObj) {

        sql += index + ",";
    }
    if (sql.endsWith(",")) {
        sql = sql.substring(0, sql.length - 1) + ")";
    }
    sql = sql + " values(";
    for (let index in addObj) {
        sql += "@" + index + ",";
        request.input(index, addObj[index]);
    }
    if (sql.endsWith(",")) {
        sql = sql.substring(0, sql.length - 1) + ")";
    }
    sql += `   END
    END`;

    let result = await request.query(sql);
    await mssql.close(); // close
    return result;
};

//更新数据
let updateModel = async function (updateObj, tableName, whereObj) {
    await mssql.close(); // close
    let connection = await getConnection();
    let request = connection.request();
    let sql = `UPDATE ${tableName} SET `;
    if (updateObj) {
        for (let index in updateObj) {
            if (typeof updateObj[index] === "number") {
                request.input(index, updateObj[index]);
                sql += index + "=@" + index + ",";
            } else if (typeof updateObj[index] === "string") {
                request.input(index, updateObj[index]);
                sql += index + "=@" + index + ",";
            }
        }
    }
    if (sql.endsWith(",")) {
        sql = sql.substring(0, sql.length - 1) + "";
    }
    sql = sql + " WHERE 1=1 ";
    if (whereObj) {
        for (let index in whereObj) {
            if (typeof whereObj[index] === "number") {
                request.input(index, whereObj[index]);
                sql += " AND " + index + "=@" + index + "";
            } else if (typeof whereObj[index] === "string") {
                request.input(index, whereObj[index]);
                sql += " AND " + index + "=@" + index + "";
            }
        }
    }
    if (sql.endsWith(" AND ")) {
        sql = sql.substring(0, sql.length - 5) + "";
    }
    let result = await request.query(sql);
    await mssql.close(); // close
    return result;
};

// 查询列表集合
let deleteModel = async function (tableName, whereObj) {
    await mssql.close(); // close
    let connection = await getConnection();
    let request = connection.request();
    let sql = `DELETE  FROM ${tableName}`;
    sql = sql + " WHERE 1=1 ";
    if (whereObj) {
        for (let index in whereObj) {
            if (typeof whereObj[index] === "number") {
                request.input(index, whereObj[index]);
                sql += " AND " + index + "=@" + index + "";
            } else if (typeof whereObj[index] === "string") {
                request.input(index, whereObj[index]);
                sql += " AND " + index + "=@" + index + "";
            }
        }
    }
    if (sql.endsWith(" AND ")) {
        sql = sql.substring(0, sql.length - 5) + "";
    }
    let result = await request.query(sql);
    await mssql.close(); // close
    return result;
};


//批量合并数据
let mergeObjs = async function (targetTable, objs, whereStr, uFields, iFields, isDelete) {
    let sql = "";
    let rowIndex = 1;
    sql = sql + `
    ( `
    objs.forEach(mergeObj => {
        sql = sql + `
        SELECT  * FROM (SELECT `;
        for (let index in mergeObj) {
            sql = sql + ` '${mergeObj[index]}' AS  ${index},`;
        }
        if (sql.endsWith(",")) {
            sql = sql.substring(0, sql.length - 1) + ") AS t_" + rowIndex + `
            UNION ALL `;
        }
        rowIndex++;
    });
    if (sql.endsWith(" UNION ALL ")) {
        sql = ` ${sql.substring(0, sql.length - " UNION ALL ".length)} 
    ) AS sourceTable `;
    }
    let result = merge(targetTable, sql, whereStr, uFields, iFields, isDelete);
    return result;
};

//批量合并数据
let merge = async function (targetTable, sourceTable, whereStr, uFields, iFields, isDelete) {
    let connection = await getConnection();
    let request = connection.request();
    //mergeObjs先插入临时表， 在
    let sql = "";
    sql = sql + `
    MERGE INTO ${targetTable}  AS T
    USING  (SELECT  * FROM ${sourceTable}  ) AS S 
    ON 2>1 ${(typeof whereStr==='string'&&whereStr!=="")?whereStr:""}`
    //U匹对修改
    if (Array.isArray(uFields) && uFields !== []) {
        sql = sql + `
        WHEN MATCHED THEN`
        sql = sql + `
        UPDATE SET `
        for (let field of uFields) {
            sql = sql + `T.${field}=S.${field} ,`;
        }
        if (sql.endsWith(",")) {
            sql = sql.substring(0, sql.length - 1) + "";
        }
    }
    //I匹对新增
    if (Array.isArray(iFields) && iFields !== []) {
        sql = sql + `
        WHEN NOT MATCHED  BY TARGET THEN `;
        sql = sql + `
        INSERT(${ iFields.join(",")  })`;
        sql = sql + `VALUES(`;
        for (let field of iFields) {
            sql = sql + `S.${field} ,`;
        }
        if (sql.endsWith(",")) {
            sql = sql.substring(0, sql.length - 1) + ")";
        }
    }
    if (isDelete) {
        sql = sql + `
        WHEN NOT MATCHED BY SOURCE THEN
        Delete`;
    }
    sql = sql + `;`;
    let result = await request.query(sql);
    await mssql.close(); // close
    return result;
};
exports.query = query;
exports.queryList = queryList;
exports.queryModel = queryModel;
exports.deleteModel = deleteModel;
exports.updateModel = updateModel;
exports.insertModel = insertModel;
exports.mergeObjs = mergeObjs;
exports.merge = merge;