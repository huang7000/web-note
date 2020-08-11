/* eslint-disable prettier/prettier */
//转日期 
function dateFormat(date,mark) {
    mark=mark||"-";
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = newDate.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        return year + mark + month +mark + day;
    } else {
        return "";
    }
}
//转日期  年月日
function dateCNFormat(date) {
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = newDate.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        return year + "年" + month + "月" + day+ "日" ;
    } else {
        return "";
    }
}
//转日期时间  年月日时分秒
function dateTimeFormat(dateTime,mark) {
    mark=mark||"-";
    if (dateTime) {
        dateTime = dateTime.toString();
        var newDateTime = new Date(dateTime);
        let year = newDateTime.getFullYear();
        let month = newDateTime.getMonth() + 1;
        month = month > 9 ? month : "0" + month;
        let day = newDateTime.getDate();
        day = day > 9 ? day : "0" + day;
        let h = newDateTime.getHours();
        h = h > 9 ? h : "0" + h;
        let m = newDateTime.getMinutes();
        m = m > 9 ? m : "0" + m;
        let s = newDateTime.getSeconds();
        s = s > 9 ? s : "0" + s;
        return year + mark+ month +mark + day + " " + h + ":" + m + ":" + s;
    } else {
        return "";
    }
}
//转日期时间  年月日时分秒
function dateTimeCNFormat(dateTime) {
    if (dateTime) {
        dateTime = dateTime.toString();
        var newDateTime = new Date(dateTime);
        let year = newDateTime.getFullYear();
        let month = newDateTime.getMonth() + 1;
        month = month > 9 ? month : "0" + month;
        let day = newDateTime.getDate();
        day = day > 9 ? day : "0" + day;
        let h = newDateTime.getHours();
        h = h > 9 ? h : "0" + h;
        let m = newDateTime.getMinutes();
        m = m > 9 ? m : "0" + m;
        let s = newDateTime.getSeconds();
        s = s > 9 ? s : "0" + s;
        return year + "年" + month + "月" + day + "日 " + h + ":" + m + ":" + s;
    } else {
        return "";
    }
}

//转年月
function monthFormat(date,mark) {
    mark=mark||"-";
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        return year + mark + month;
    } else {
        return "";
    }
}

//转年月CN
function monthCNFormat(date) {
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        return year + "年" + month + "月"  ;
    } else {
        return "";
    }
}

//转年
function yearFormat(date) {;
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        return year;
    } else {
        return "";
    }
}

//转年CN
function yearCNFormat(date) {
    if (date) {
        date = date.toString();
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        return year + "年" ;
    } else {
        return "";
    }
}

// 数字转千分符
function toThousandFormat(num, thousand, fixedNum, defaultText) {
    defaultText = defaultText || "";
    thousand = thousand || ",";
    fixedNum = fixedNum || 2;
    if (num === null || num === undefined) {
        return defaultText;
    }
    num = num.toFixed(fixedNum);
    let reg1 = /\d{1,3}(?=(\d{3})+$)/g;
    let reg2 = /^(\d+)((\.\d+)?)$/;
    let result = num.replace(reg2, function (num1, num2) {
        return num1.replace(reg1, "$&" + thousand) + num2
    })
    return result;
}

// 千分符转数字
function toNumFormat(num, thousand, fixedNum, defaultText) {
    defaultText = defaultText || null;
    thousand = thousand || ",";
    fixedNum = fixedNum || 2;
    if (num === null || num === undefined) {
        return defaultText;
    }
    num = num.toString();
    //num=num.replace(/,/gi,"");
    num = num.replace(/thousand/gi, "");
    num = num.toFixed(fixedNum);
    return num;
}

// 数字转百分比
function toPercentageFormat(num, fixedNum, defaultText) {
    defaultText = defaultText || "";
    if (num > 0 || num < 0) {
        num = Number(num * 100).toFixed(fixedNum)
        return num + "%";
    } else {
        return defaultText;
    }
}

const isArr = [{
    value: 1,
    text: "是"
}, {
    value: 0,
    text: "否"
}];

// 是否转中文
function isToText(value, arr) {
    let isText = "";
    arr = arr || isArr;
    let item = arr.find(res => res.value === value);
    if (item !== undefined && item !== null) {
        isText = item.text;
    }
    return isText;
}

// 是否转数字
function isToValue(text, arr) {
    let isValue = "";
    arr = arr || isArr;
    let item = arr.find(res => res.text === text);
    if (item !== undefined && item !== null) {
        isValue = item.value;
    }
    return isValue;
}

export {
    dateFormat,
    dateCNFormat,
    dateTimeFormat,
    dateTimeCNFormat,
    monthFormat,
    monthCNFormat,
    yearFormat,
    yearCNFormat,
    toNumFormat,
    toThousandFormat,
    toPercentageFormat,
    isToText,
    isToValue
}