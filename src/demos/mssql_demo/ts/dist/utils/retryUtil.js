"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryUtil = void 0;
const log4js = require("log4js");
const logger = log4js.getLogger("retryUtil");
class RetryUtil {
    static tryInvoke(callback, validFunc, maxRetryTimes = 5, logErrorMinTimes = 0) {
        let timer = 0;
        let isSucceed = false;
        while (!isSucceed && timer <= maxRetryTimes) {
            try {
                let result = callback();
                isSucceed = validFunc(result);
                if (!isSucceed) {
                    timer++;
                }
                return result;
            }
            catch (error) {
                if (timer++ > logErrorMinTimes) {
                    logger.error(`retry failed, retry times: ${timer}, error: ${error}`);
                }
            }
        }
        return null;
    }
    ;
    static async tryInvokeAsync(callback, validFunc, maxRetryTimes = 5, logErrorMinTimes = 0) {
        let timer = 0;
        let isSucceed = false;
        while (!isSucceed && timer <= maxRetryTimes) {
            try {
                let result = await callback();
                isSucceed = validFunc(result);
                if (!isSucceed) {
                    timer++;
                }
                return result;
            }
            catch (error) {
                if (timer++ > logErrorMinTimes) {
                    logger.error(`retry failed, retry times: ${timer}, error: ${error}`);
                }
            }
        }
        return null;
    }
    ;
}
exports.RetryUtil = RetryUtil;
//# sourceMappingURL=retryUtil.js.map