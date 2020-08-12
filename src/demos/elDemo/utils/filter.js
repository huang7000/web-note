/* eslint-disable prettier/prettier */
import Vue from "vue";
import format from "@/demos/elDemo/utils/format";
Vue.filter("dateFormat", (date,mark) => {
    return format.dateFormat(date,mark);
});
Vue.filter("dateCNFormat", date => {
    return format.dateCNFormat(date);
});
Vue.filter("timeFormat", date => {
    return format.timeFormat(date);
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

Vue.filter("numFormat", (num, mark, fixed, def) => {
    return format.toNumFormat(num, mark, fixed, def);
});

Vue.filter("moneyFormat", (num, mark, fixed, def) => {
    return format.moneyFormat(num, mark, fixed, def);
});

Vue.filter("percentageFormat", (num, mark, fixed, def) => {
    return format.percentageFormat(num, mark, fixed, def);
});
Vue.filter("isFormat", (value, arr) => {
    return format.isFormat(value, arr);
});
Vue.filter("selectFormat", (value, arr) => {
    return format.selectFormat(value, arr);
});
Vue.filter("selectListFormat", (value, arr,split,join) => {
    return format.selectListFormat(value, arr,split,join);

});
