"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const dbUtil_1 = require("./utils/dbUtil");
// config log4js
log4js_1.configure({
    appenders: {
        file: {
            type: 'file',
            filename: './logs/sys.log',
            maxLogSize: 1024000,
            backups: 10
        },
        errorFile: {
            type: "file",
            filename: "./logs/errors.log"
        },
        errors: {
            type: "logLevelFilter",
            level: "ERROR",
            appender: "errorFile"
        },
        httpLog: {
            type: 'file',
            filename: './logs/http.log',
            maxLogSize: 204800,
            backups: 3
        },
        dbUtil: {
            type: 'file',
            filename: './logs/dbUtil.log',
            maxLogSize: 1024000,
            backups: 3
        },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['file', 'console', 'errors'], level: 'debug' },
        dbUtil: { appenders: ['dbUtil'], level: 'debug' },
        http: { appenders: ['httpLog'], level: 'debug' }
    }
});
(async () => {
    let results_1 = await dbUtil_1.DbUtil.query(`SELECT * FROM t_targetTable`);
    console.log(results_1);
})();
//# sourceMappingURL=index.js.map