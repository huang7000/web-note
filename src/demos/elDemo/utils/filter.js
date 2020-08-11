/* eslint-disable prettier/prettier */
import Vue from "vue";
import format from "@/demos/elDemo/utils/format";
Vue.filter("dateFormat", (date,mark) => {
    return format.dateFormat(date,mark);
});
Vue.filter("dateCNFormat", date => {
    return format.dateCNFormat(date);
});
Vue.filter("dateTimeFormat",  (date,mark)  => {
    return format.dateTimeFormat(date,mark);
});
Vue.filter("dateTimeCNFormat", dateTime => {
    return format.dateTimeCNFormat(dateTime);
});
Vue.filter("monthFormat", (date,mark) => {
    return format.dateFormat(date,mark);
});

Vue.filter("monthCNFormat", date => {
    return format.monthCNFormat(date);
});

Vue.filter("yearFormat", date => {
    return format.yearFormat(date);
});
Vue.filter("yearCNFormat", date => {
    return format.yearCNFormat(date);
});

Vue.filter("toNumFormat", (num, thousand, fixedNum, defaultText) => {
    return format.toNumFormat(num, thousand, fixedNum, defaultText);
});

Vue.filter("toThousandFormat", (num, thousand, fixedNum, defaultText) => {
    return format.toThousandFormat(num, thousand, fixedNum, defaultText);
});

Vue.filter("toPercentageFormat", (num, thousand, fixedNum, defaultText) => {
    return format.toPercentageFormat(num, thousand, fixedNum, defaultText);
});


Vue.filter("isToValue", (text, arr) => {
    return format.isToValue(text, arr);
});

Vue.filter("isToText", (text, arr) => {
    return format.isToText(text, arr);

});

Vue.filter("isToValue", (text, arr) => {
    return format.isToValue(text, arr);
});