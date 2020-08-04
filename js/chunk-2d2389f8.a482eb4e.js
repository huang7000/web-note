(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2389f8"],{ffbd:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Node.js 回调函数")])]),a("p",[s._v("Node.js 异步编程的直接体现就是回调。\n异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。\n回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。")]),a("p",[s._v("input.txt")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-txt"},[s._v("txt")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-txt"}},[s._v("$ npm install npm -g\n")])]),a("p",[s._v("阻塞代码实例")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" fs = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fs"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" data = fs.readFileSync("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input.txt"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data.toString());\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"程序执行结束!"')]),s._v(");\n")])]),a("p",[s._v("执行结果")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-result"},[s._v("result")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-result"}},[s._v("$ node main.js\n菜鸟教程官网地址：www.runoob.com\n程序执行结束!\n")])]),a("p",[s._v("非阻塞代码实例")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" fs = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fs"')]),s._v(");\nfs.readFile("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input.txt"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("err, data")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (err) "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".error(err);\n "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data.toString());\n});\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"程序执行结束!"')]),s._v(");\n")])]),a("p",[s._v("执行结果")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-result"},[s._v("result")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-result"}},[s._v("$ node main.js\n程序执行结束!\n菜鸟教程官网地址：www.runoob.com\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Node.js 事件驱动程序")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 引入 events 模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" events = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"events"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建 eventEmitter 对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" eventEmitter = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" events.EventEmitter();\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建事件处理程序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" connectHandler = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("connected")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"连接成功。"')]),s._v(");\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 触发 data_received 事件")]),s._v("\n eventEmitter.emit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data_received"')]),s._v(");\n};\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 绑定 connection 事件处理程序")]),s._v("\neventEmitter.on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"connection"')]),s._v(", connectHandler);\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用匿名函数绑定 data_received 事件")]),s._v("\neventEmitter.on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data_received"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"数据接收成功。"')]),s._v(");\n});\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 触发 connection 事件")]),s._v("\neventEmitter.emit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"connection"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"程序执行完毕。"')]),s._v(");\n")])]),a("p",[s._v("执行结果")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-result"},[s._v("result")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-result"}},[s._v("$ node main.js\n连接成功。\n数据接收成功。\n程序执行完毕。\n")])])],2)],1)},r=[],n=a("2877"),p={},l=Object(n["a"])(p,e,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2389f8.a482eb4e.js.map