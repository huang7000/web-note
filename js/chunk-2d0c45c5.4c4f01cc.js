(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c45c5"],{"3b00":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("计算属性")])]),t("ol",[t("li",[s._v("计算属性是基于它们的依赖进行缓存的。")]),t("li",[s._v("只在相关依赖发生改变时它们才会重新求值。")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" vm = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#example"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 计算属性的 getter")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reversedMessage")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// `this` 指向 vm 实例")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".message\n       .split("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(")\n       .reverse()\n       .join("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(");\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(vm.reversedMessage); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// => 'olleH'")]),s._v("\nvm.message = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Goodbye"')]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(vm.reversedMessage); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// => 'eybdooG'")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v('Original message: "{{ message }}"'),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v('Computed reversed message: "{{ reversedMessage }}"'),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("计算属性缓存 vs 方法")])]),t("ol",[t("li",[s._v("计算属性只在相关依赖发生改变时它们才会重新求值。")]),t("li",[s._v("方法 当触发重新渲染时，调用方法将总会再次执行函数。")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexComputed = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexMethod = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reversedMessage")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     indexComputed++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".message\n         .split("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(")\n         .reverse()\n         .join("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(") +\n       "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" indexComputed:"')]),s._v(" +\n       indexComputed\n     );\n   }\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reversedFun")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     indexMethod++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".message\n         .split("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(")\n         .reverse()\n         .join("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(") +\n       "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" indexMethod:"')]),s._v(" +\n       indexMethod\n     );\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app.reversedMessage); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// olleH indexComputed:1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app.reversedFun()); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// olleH indexMethod:2")]),s._v("\napp.message = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"message"')]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app.reversedMessage); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//egassem indexComputed2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app.reversedFun()); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//egassem indexMethod3")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Original Message：{{message}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Computer Reverse Message：{{reversedMessage}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("reversedFun：{{reversedFun()}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("计算属性 vs 侦听属性")])]),t("p",[s._v("更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexComputed = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexWatch = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-2"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("firstName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"7000"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lastName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"huang"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("quanming")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Foo Bar"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("firstName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") ")]),s._v("{\n     indexWatch++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexWatch + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次watch的firstName"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".quanming = val + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lastName;\n   },\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lastName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") ")]),s._v("{\n     indexWatch++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexWatch + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次watch的lastName"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".quanming = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".firstName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + val;\n   }\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     indexComputed++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexComputed + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次computed的fullName"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".firstName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lastName;\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.fullName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 7000 huang")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.firstName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 7000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.lastName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// huang")]),s._v("\napp2.firstName = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xiqian"')]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.fullName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//xiqian huang")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.firstName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// xiqian")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app2.lastName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// huang")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-2"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("firstName：{{firstName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("lastName：{{lastName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("fullName：{{fullName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("xingming:{{xingming}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("计算属性的 setter 和 getter")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexGet = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexSet = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexfirstName = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" indexlastName = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" app3 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app-3"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("firstName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"7000"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lastName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"huang"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("quanming")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Foo Bar"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("firstName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") ")]),s._v("{\n     indexfirstName++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexfirstName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次dd的wwatch的firstName"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".quanming = val + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lastName;\n   },\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lastName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") ")]),s._v("{\n     indexlastName++;\n     "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexlastName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次dd的watch的lastName"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".quanming = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".firstName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + val;\n   }\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullName")]),s._v(": {\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// getter")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("get")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n       indexGet++;\n       "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexGet + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次dd的computed的fullName的get"')]),s._v(");\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".firstName + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lastName;\n     },\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// setter")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("set")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("newValue")]),s._v(") ")]),s._v("{\n       indexSet++;\n       "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"执行"')]),s._v(" + indexSet + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"次dd的computed的fullName的set"')]),s._v(");\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" names = newValue.split("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(");\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".firstName = names["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("];\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lastName = names[names.length - "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("];\n     }\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app3.fullName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 7000 huang")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app3.firstName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 7000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(app3.lastName); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// huang")]),s._v("\napp3.fullName = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"huang xiqian"')]),s._v(";\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app-3"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("firstName：{{firstName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("lastName：{{lastName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("fullName：{{fullName}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("侦听器")])]),t("p",[s._v("在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" watchExampleVM = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#watch-example"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("question")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("answer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"I cannot give you an answer until you ask a question!"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 如果 `question` 发生改变，这个函数就会运行")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("question")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("newQuestion, oldQuestion")]),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".answer = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Waiting for you to stop typing..."')]),s._v(";\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".debouncedGetAnswer();\n   }\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 请参考：https://lodash.com/docs#debounce")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".debouncedGetAnswer = _.debounce("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getAnswer, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("getAnswer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".question.indexOf("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"?"')]),s._v(") === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(") {\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".answer = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Questions usually contain a question mark. ;-)"')]),s._v(";\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(";\n     }\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".answer = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Thinking..."')]),s._v(";\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vm = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(";\n     axios\n       .get("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://yesno.wtf/api"')]),s._v(")\n       .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("response")]),s._v(") ")]),s._v("{\n         vm.answer = _.capitalize(response.data.answer);\n       })\n       .catch("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("error")]),s._v(") ")]),s._v("{\n         vm.answer = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Error! Could not reach the API. "')]),s._v(" + error;\n       });\n   }\n }\n});\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"watch-example"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   Ask a yes/no question:\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"question"')]),s._v(" />")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{ answer }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2)],1)},e=[],n=t("2877"),p={},l=Object(n["a"])(p,r,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c45c5.4c4f01cc.js.map