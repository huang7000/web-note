(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5744"],{"950b":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("过滤器")])]),t("p",[s._v("过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。\n过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”(|)符号指示：")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   qty: {{qty}}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   全局保留整数： {{qty|numFilter}}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n   本地保留两位小数： {{qty|moneyFilter}}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.filter("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"numFilter"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("value")]),s._v(") ")]),s._v("{\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!value) "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n value = value.toFixed("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(");\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value;\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("qty")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("123.4566")]),s._v(",\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("filters")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("moneyFilter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("value")]),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!value) "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n     value = value.toFixed("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value;\n   },\n },\n});\n")])]),t("blockquote",[t("ol",[t("li",[s._v("当全局过滤器和局部过滤器重名时，会采用局部过滤器。")]),t("li",[s._v("过滤器可以串联："+s._s(s._f("filterB")(s._f("filterA")(s.message))))]),t("li",[s._v("过滤器是 JavaScript 函数，因此可以接收参数 "+s._s(s._f("filterA")(s.message,"arg1",s.arg2)))])])])],2)],1)},l=[],p=t("2877"),e={},n=Object(p["a"])(e,r,l,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e5744.2d3ae65a.js.map