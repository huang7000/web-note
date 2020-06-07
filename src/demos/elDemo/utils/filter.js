/* eslint-disable prettier/prettier */
import Vue from "vue";
import common from "./common";
Vue.filter("dateFormat", date => {
 return common.dateFormat(date);
});

Vue.filter("dateTimeFormat", dateTime => {
    return common.dateTimeFormat(dateTime);
});

Vue.filter("thousandToNumFormat", (num, thousand, fixedNum) => {
    return common.thousandToNumFormat(num, thousand, fixedNum);
});

Vue.filter("numToThousandFormat", (num, thousand, fixedNum) => {
    return common.numToThousandFormat(num, thousand, fixedNum);

});

