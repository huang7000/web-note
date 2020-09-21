(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8e80"],{"8aef":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("模板语法")])]),t("ol",[t("li",[t("code",{pre:!0},[s._v("vue.js")]),s._v("使用了基于"),t("code",{pre:!0},[s._v("HTML")]),s._v("的模板语法，允许开发者声明式地将"),t("code",{pre:!0},[s._v("DOM")]),s._v("绑定至底层"),t("code",{pre:!0},[s._v("Vue")]),s._v("实例的数据。所有"),t("code",{pre:!0},[s._v("Vue.js")]),s._v("的模板都是合法的"),t("code",{pre:!0},[s._v("HTML")]),s._v("，所以能被遵循规范的浏览器和"),t("code",{pre:!0},[s._v("HTML")]),s._v("解析器解析。")]),t("li",[s._v("在底层的实现上，Vue 将模板编译成虚拟"),t("code",{pre:!0},[s._v("DOM")]),s._v("渲染函数。结合响应系统"),t("code",{pre:!0},[s._v("Vue")]),s._v("能够智能地计算出最少需要重新渲染多少组件，并把"),t("code",{pre:!0},[s._v("DOM")]),s._v("操作次数减到最少。")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("文本")])]),t("p",[s._v("数据绑定最常见的形式就是使用"),t("code",{pre:!0},[s._v("Mustache")]),s._v("语法 (双大括号) 的文本插值")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-once")]),s._v(">")]),s._v("姓名 ：{{name}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("年龄：{{age}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"小明"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v("\n }\n});\napp.name = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"小强"')]),s._v("; "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//v-once 导致页面姓名没有更改")]),s._v("\napp.age = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("; "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 年龄改成 20")]),s._v("\n")])]),t("ol",[t("li",[s._v("绑定的数据对象上"),t("code",{pre:!0},[s._v("age")]),s._v("属性发生了改变，插值处的内容都会更新。")]),t("li",[s._v("通过使用"),t("code",{pre:!0},[s._v("v-once")]),s._v("指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("原始"),t("code",[s._v("HTML")])])]),t("p",[s._v("双大括号会将数据解释为普通文本，而非"),t("code",{pre:!0},[s._v("HTML")]),s._v("代码。为了输出真正的"),t("code",{pre:!0},[s._v("HTML")]),s._v("，你需要使用"),t("code",{pre:!0},[s._v("v-html")]),s._v("指令")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-2"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Using mustaches: {{ rawHtml }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Using v-html directive: "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-html")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rawHtml"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" rawHtml = {\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rawHtml")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<span style=\"color:red\"This should be red</span>'")]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("18")]),s._v("\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-2"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": rawHtml\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("特性")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-3"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dynamicId"')]),s._v(">")]),s._v("id是ceshidynamicId"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:disabled")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isButtonDisabled"')]),s._v(">")]),s._v("Button"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app3 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-3"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dynamicId")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ceshidynamicId"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isButtonDisabled")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n }\n});\n")])]),t("ol",[t("li",[t("code",{pre:!0},[s._v("Mustache")]),s._v("语法不能作用在"),t("code",{pre:!0},[s._v("HTML")]),s._v("特性上，遇到这种情况应该使用"),t("code",{pre:!0},[s._v("v-bind")]),s._v("指令")]),t("li",[t("code",{pre:!0},[s._v("isButtonDisabled")]),s._v("的值是"),t("code",{pre:!0},[s._v("null")]),s._v("、"),t("code",{pre:!0},[s._v("undefined")]),s._v("或"),t("code",{pre:!0},[s._v("false")]),s._v("，则"),t("code",{pre:!0},[s._v("disabled")]),s._v("特性甚至不会被包含在渲染出来的"),t("code",{pre:!0},[s._v("<button>")]),s._v("元素中")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("使用 JavaScript 表达式")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-4"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{ number + 1 }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{ ok ? 'YES' : 'NO' }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{ message.split('').reverse().join('') }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'list-' + id\"")]),s._v(">")]),s._v("wd"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 这是语句，不是表达式{{ var a = 1 }} --\x3e")]),s._v("\n   {{ 1 }}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 流控制也不会生效，请使用三元表达式{{ if (ok) { return message } }} --\x3e")]),s._v('\n   {{ok?message:""}}\n '),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app4 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-4"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ok")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"我是中国人，我爱中国"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ceshiid"')]),s._v("\n }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("指令")])]),t("ol",[t("li",[s._v("指令"),t("code",{pre:!0},[s._v("Directives")]),s._v("是带有"),t("code",{pre:!0},[s._v("v-")]),s._v("前缀的特殊特性。指令特性的值预期是单个"),t("code",{pre:!0},[s._v("JavaScript")]),s._v("表达式 ("),t("code",{pre:!0},[s._v("v-for")]),s._v("是例外情况)。")]),t("li",[s._v("指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于"),t("code",{pre:!0},[s._v("DOM")]),s._v("。")]),t("li",[s._v("参数 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，"),t("code",{pre:!0},[s._v("v-bind")]),s._v("指令可以用于响应式地更新"),t("code",{pre:!0},[s._v("HTML")]),s._v("特性")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-5"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"seen"')]),s._v(">")]),s._v("现在你看到我了"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'list-' + id\"")]),s._v(">")]),s._v("wd"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(">")]),s._v("百度"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doSomething"')]),s._v(">")]),s._v("百度失败"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app5 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-5"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("seen")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"www.baidu.com"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ceshiid"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doSomething")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"访问不了"')]),s._v(");\n   }\n }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("动态参数")])]),t("ol",[t("li",[s._v("用方括号括起来的"),t("code",{pre:!0},[s._v("JavaScript")]),s._v("表达式作为一个指令的参数")]),t("li",[t("code",{pre:!0},[s._v("attributeName")]),s._v("，其值为"),t("code",{pre:!0},[s._v("href")]),s._v("，那么这个绑定将等价于"),t("code",{pre:!0},[s._v("v-bind:href")])]),t("li",[s._v("当"),t("code",{pre:!0},[s._v("eventName")]),s._v("的值为"),t("code",{pre:!0},[s._v("focus")]),s._v("时，"),t("code",{pre:!0},[s._v("v-on:[eventName]")]),s._v("将等价于"),t("code",{pre:!0},[s._v("v-on:focus")])]),t("li",[s._v("对动态参数的值的约束 动态参数预期会求出一个字符串，异常情况下值为"),t("code",{pre:!0},[s._v("null")]),s._v("。这个特殊的"),t("code",{pre:!0},[s._v("null")]),s._v("值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。")]),t("li",[s._v("对动态参数表达式的约束 动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在"),t("code",{pre:!0},[s._v("HTML attribute")]),s._v("名里是无效的"),t("code",{pre:!0},[s._v("DOM")]),s._v("中使用模板时 (直接在一个"),t("code",{pre:!0},[s._v("HTML")]),s._v("文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把"),t("code",{pre:!0},[s._v("attribute")]),s._v("名全部强制转为小写")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-6"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!--\n注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。\n--\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:")]),s._v("["),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributeName")]),s._v("]="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v(" </"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:")]),s._v("["),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("eventName")]),s._v("]="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doSomething"')]),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v(" </"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 这会触发一个编译警告 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:")]),s._v("['"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v("' + "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v("]="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v(" </"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("a")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!--\n在 DOM 中使用模板时这段代码会被转换为`v-bind:[someattr]`。\n除非在实例中有一个名为“someattr”的 property，否则代码不会工作。\n--\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:")]),s._v("["),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("someAttr")]),s._v("]="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v(" </"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("a")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app6 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-6"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"www.baidu.com"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributename")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"href"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这边只能全部小写要不然会编译报错")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("eventname")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这边只能全部小写要不然会编译报错")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("someattr")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"href"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这边只能全部小写要不然会编译报错")]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doSomething")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"百度失败"')]),s._v(");\n   }\n }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("修饰符")])]),t("ol",[t("li",[s._v("修饰符 ("),t("code",{pre:!0},[s._v("Modifiers")]),s._v(") 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。")]),t("li",[t("code",{pre:!0},[s._v(".prevent")]),s._v("修饰符告诉"),t("code",{pre:!0},[s._v("v-on")]),s._v("指令对于触发的事件调用"),t("code",{pre:!0},[s._v("event.preventDefault()")])])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:submit.prevent")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onSubmit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-7"')]),s._v(">")]),s._v("\n ...\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submit"')]),s._v(">")]),s._v("表单提交"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app7 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-7"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {},\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("onSubmit")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"表单提交前出发事件"')]),s._v(");\n   }\n }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("缩写")])]),t("p",[t("code",{pre:!0},[s._v("Vue")]),s._v("为"),t("code",{pre:!0},[s._v("v-bind")]),s._v("和"),t("code",{pre:!0},[s._v("v-on")]),s._v("这两个最常用的指令，提供了特定简写")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@next"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-8"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 完整语法 --\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 缩写 --\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 完整语法 --\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doSomething"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 缩写 --\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doSomething"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app8 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-8"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"www.baidu.com"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doSomething")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a标签点击事件"')]),s._v(");\n   }\n }\n});\n")])])],2)],1)},p=[],v=t("2877"),e={},l=Object(v["a"])(e,r,p,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e8e80.45483be6.js.map