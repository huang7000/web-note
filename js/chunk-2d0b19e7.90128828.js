(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b19e7"],{"212d":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("安全类型检测")])]),a("p",[s._v("typeof 和 instanceof 由于某些无法预知行为导致检测类型不安全，使用 Object 进行安全检测")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".prototype.toString.call(value) == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[object Array]"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".prototype.toString.call(value) == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[object RegExp]"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".prototype.toString.call(value) == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[object Function]"')]),s._v(";\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Object 对象限制")])]),a("ol",[a("li",[s._v("Object.preventExtensions() 禁用属性扩展")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".preventExtensions(person);\nperson.age = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29")]),s._v(";\nalert(person.age); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//undefined")]),s._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Object.isExtensible() 是否支持属性扩展")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".preventExtensions(person);\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Object.seal() 密封对象不可扩展，而且已有成员的 Configurable 特性将被设置为 false")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".seal(person);\nperson.age = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29")]),s._v(";\nalert(person.age); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("delete")]),s._v(" person.name;\nalert(person.name); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"Nicholas"')]),s._v("\n")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("Object.isSealed() 是否密封对象")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isSealed(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".seal(person);\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isSealed(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\n")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("Object.freeze() 冻结对象")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".freeze(person);\nperson.age = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29")]),s._v(";\nalert(person.age); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("delete")]),s._v(" person.name;\nalert(person.name); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"Nicholas"')]),s._v("\nperson.name = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Greg"')]),s._v(";\nalert(person.name); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"Nicholas"')]),s._v("\n")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("Object.isFrozen() 是否冻结对象")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(" };\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isSealed(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isFrozen(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".freeze(person);\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isExtensible(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//false")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isSealed(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\nalert("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".isFrozen(person)); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("setInterval 定时器")])]),a("p",[s._v("setInterval() 时间间隔如果小于代码执行时间，某些间隔会被跳过")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//链式调用setTimeout保证每个定时器都执行模拟setInterval")]),s._v("\nsetTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//处理中")]),s._v("\n setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v(".callee, interval);\n}, interval);\n")])]),a("blockquote",[a("p",[s._v("定时器时间间隔，指的是插入代码时间，真正的执行时间取决有浏览器空闲间隔插入")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("函数防抖(debounce)")])]),a("p",[s._v("触发事件后只能在 n 秒内执行一次能够，在 n 秒内再次触发则重置计算时间 （窗体的 resize 事件）")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("debounce")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("fn")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" timer;\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _self = fn;\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   clearTimeout(timer);\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" args = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// fn所需要的参数")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _me = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 当前的this")]),s._v("\n   timer = setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     _self.call(_me, args);\n   }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(");\n };\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("函数节流（throttle）")])]),a("p",[s._v("限制一个函数在一定时间内只能执行一次")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("throttle")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("fn, interval")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _self = fn;\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" firstTime = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" timer;\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" args = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v(";\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _me = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(";\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (firstTime) {\n     _self.call(_me, args);\n   }\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (timer) {\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n   }\n   timer = setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     clearTimeout(timer);\n     timer = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(";\n     _self.call(_me, args);\n   }, interval || "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n };\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("离线检测")])]),a("p",[s._v("navigator.onLine 定义了浏览器是否离线状态，不同浏览器有差异，使用事件检测可以兼容各个浏览器")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("EventUtil.addHandler("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"online"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Online"')]),s._v(");\n});\nEventUtil.addHandler("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"offline"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Offline"')]),s._v(");\n});\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("引用缓存")])]),a("ol",[a("li",[a("p",[s._v("manifest 定义下载数据离线状态可以访问 web 程序")])]),a("li",[a("p",[s._v("manifest 文件")])])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("CACHE MANIFEST\n#Comment\nfile.js\nfile.css\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("标签引用")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("manifest")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/offline.manifest"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("code",{pre:!0},[s._v("applicationCache")]),s._v(" 对象进行缓存的操作，文件更新下载状态判断等")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Cookie")])]),a("ol",[a("li",[s._v("Cookie 用于存储会话信息，作为 http 头部的一部分")]),a("li",[s._v("各个浏览器对 Cookie 的存储数量有不同的限制，超过的处理机制也不同")]),a("li",[s._v("HTTP 专有 Cookie 可以从浏览器或者服务器设置，但 是只能从服务器端读取，因为 JavaScript 无法获取 HTTP 专有 Cookie 的值")]),a("li",[s._v("Cookie 数据并非存储在一个安全环境中，其中包含的任何数据都可以被他人访问")]),a("li",[s._v("为了最佳的浏览器兼容性，最好将整个 Cookie 长度限制在 4095B(含 4095)以内")]),a("li",[s._v("Cookie 数据处理都需要用 url 编码进行处理")]),a("li",[s._v("跨域设置 withCredentials 属性发送 Cookie，支持 IE10+、Firefox 3.5+、Safari 4+和 Chrome")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("IE 用户数据")])]),a("ol",[a("li",[s._v("定义样式存储数据，用户数据允许每个文档最多 128KB 数据，每个域名最多 1MB 数据")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"behavior:url(#default#userData)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataStore"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("数据保存")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dataStore = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataStore"')]),s._v(");\ndataStore.setAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(");\ndataStore.setAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"book"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Professional JavaScript"')]),s._v(");\ndataStore.save("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"BookInfo"')]),s._v(");\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("第二次载入页面获取数据")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("dataStore.load("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"BookInfo"')]),s._v(");\nalert(dataStore.getAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(")); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"Nicholas"')]),s._v("\nalert(dataStore.getAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"book"')]),s._v(")); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"Professional JavaScript"')]),s._v("\ndataStore.removeAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(");\ndataStore.removeAttribute("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"book"')]),s._v(");\ndataStore.save("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"BookInfo"')]),s._v(");\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Storage 类型")])]),a("ol",[a("li",[s._v("通用方法")])]),a("div",{staticClass:"hv-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("方法")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("clear()")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("删除所有值;Firefox 中没有实现 。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("getItem(name)")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("根据指定的名字 name 获取对应的值。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("key(index)")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("获得 index 位置处的值的名字。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("removeItem(name)")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("删除由 name 指定的名值对儿。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("setItem(name, value)")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("为指定的 name 设置一个对应的值。")])])])])]),a("blockquote",[a("p",[s._v("可以通过 length 属性进行遍历处理")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("sessionStorage 会话临时存储，浏览器关闭存储信息也失效")]),a("li",[s._v("globalStorage 全局永久存储，可以执行域名进行会话存储")]),a("li",[s._v("localStorage 全局永久存储，相同域名、协议、端口，子域名无效。相当于 "),a("code",{pre:!0},[s._v("globalStorage[location.host]")]),s._v("。")]),a("li",[s._v("浏览器对与 storage 有大小限制，最小的限制为 2.5MB")]),a("li",[s._v("数据存储格式都是字符串")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("IndexedDB")])]),a("ol",[a("li",[s._v("类似 SQL 数据库的结构化数据存储机制")]),a("li",[s._v("存储数据采用键值对，值可以是对象")]),a("li",[s._v("可以查询对象的具体字段信息")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("创建平滑动画")])]),a("p",[s._v("RequestAnimationFrame() 创建动画，浏览器提供可以使动画平滑")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" requestAnimationFrame =\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".requestAnimationFrame ||\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".mozRequestAnimationFrame ||\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".webkitRequestAnimationFrame ||\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".msRequestAnimationFrame;\n "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("draw")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("timestamp")]),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//计算两次重绘的时间间隔")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" drawStart = timestamp || "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v(".now(),\n     diff = drawStart - startTime; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//使用 diff 确定下一步的绘制时间")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//把 startTime 重写为这一次的绘制时间")]),s._v("\n   startTime = drawStart;\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//重绘 UI")]),s._v("\n   requestAnimationFrame(draw);\n }\n startTime = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".mozAnimationStartTime || "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v(".now();\n requestAnimationFrame(draw);\n})();\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Page Visibility API")])]),a("p",[s._v("浏览器页面隐藏，最小化等浏览器可以获取状态执行对应的代码")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".hidden || "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".msHidden || "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".webKitHidden) {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//页面隐藏了")]),s._v("\n} "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//页面未隐藏")]),s._v("\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("新兴 API")])]),a("ol",[a("li",[s._v("Page Visibility API:让开发人员知道用户什么时候正在看着页面，而什么时候页面是隐藏的。")]),a("li",[s._v("Geolocation API:在得到许可的情况下，可以确定用户所在的位置。在移动 Web 应用中，这个 API 非常重要而且常用。")]),a("li",[s._v("File API:可以读取文件内容，用于显示、处理和上传。与 HTML5 的拖放功能结合，很容易就能创造出拖放上传功能。")]),a("li",[s._v("Web Timing:给出了页面加载和渲染过程的很多信息，对性能优化非常有价值。")]),a("li",[s._v("Web Workers:可以运行异步 JavaScript 代码，避免阻塞用户界面。在执行复杂计算和数据处理的时候，这个 API 非常有用;要不然，这些任务轻则会占用很长时间，重则会导致用户无法与 页面交互。")])])],2)],1)},r=[],l=a("2877"),n={},p=Object(l["a"])(n,e,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0b19e7.90128828.js.map