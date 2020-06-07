/* eslint-disable prettier/prettier */
//转日期  年月日
function dateFormat(date) {
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
        return year + "-" + month + "-" + day;
    } else {
        return "";
    }
}
//转日期时间  年月日时分秒
function dateTimeFormat(dateTime) {
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
        return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
    } else {
        return "";
    }
}

// 数字转千分符
function thousandToNumFormat(num, thousand, fixedNum) {
    thousand = thousand || ",";
    fixedNum = fixedNum || 2;
    num = num.toFixed(fixedNum);
    let reg1 = /\d{1,3}(?=(\d{3})+$)/g;
    let reg2 = /^(\d+)((\.\d+)?)$/;
    let result = num.replace(reg2, function (num1, num2) {
        return num1.replace(reg1, "$&"+thousand) + num2
    })
    return result;
}

// 千分符转数字
function numToThousandFormat(num, thousand, fixedNum) {
    thousand = thousand || ",";
    fixedNum = fixedNum || 2;
    num=num.toString();
    //num=num.replace(/,/gi,"");
    num=num.replace(/thousand/gi,"");
    num = num.toFixed(fixedNum);
    return num;
}

export {
    dateFormat,
    dateTimeFormat,
    thousandToNumFormat,
    numToThousandFormat
}