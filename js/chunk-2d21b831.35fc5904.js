(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b831"],{bfa8:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.serachTable}},[t._v("查询")]),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"主键",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}})],1)],1)},n=[],r=(a("96cf"),a("3b8d")),s=a("7977"),i={data:function(){return{tableData:[]}},methods:{serachTable:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["default"].axiosGet("/api/userApi/getUserList");case 2:e=t.sent,console.log(e),this.tableData=e.list;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=i,u=a("2877"),o=Object(u["a"])(c,l,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d21b831.35fc5904.js.map