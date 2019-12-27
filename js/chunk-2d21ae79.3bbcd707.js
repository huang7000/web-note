(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ae79"],{be00:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("监听事件")])]),t("p",[t("code",{pre:!0},[s._v("v-on")]),s._v("指令监听"),t("code",{pre:!0},[s._v("DOM")]),s._v("事件，并在触发时运行一些"),t("code",{pre:!0},[s._v("JavaScript")]),s._v("代码。")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" example1 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#example-1"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("counter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n }\n});\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example-1"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"counter += 1"')]),s._v(">")]),s._v("Add 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("The button above has been clicked {{ counter }} times."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("事件处理方法")])]),t("p",[t("code",{pre:!0},[s._v("v-on")]),s._v("还可以接收一个需要调用的方法名称。")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" example2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#example-2"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Vue.js"')]),s._v("\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在`methods`对象中定义方法")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("greet")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("event")]),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//`this`在方法里指向当前 Vue 实例")]),s._v("\n     alert("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello "')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"!"')]),s._v(");\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//`event`是原生 DOM 事件")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (event) {\n       alert(event.target.tagName);\n     }\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 也可以用 JavaScript 直接调用方法")]),s._v("\nexample2.greet(); "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// => 'Hello Vue.js!'")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example-2"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!--`greet`是在下面定义的方法名 --\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"greet"')]),s._v(">")]),s._v("Greet"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("事件处理方法")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" example3 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#example-3"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("say")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("message")]),s._v(") ")]),s._v("{\n     alert(message);\n   }\n }\n});\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example-3"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"say('hi')\"")]),s._v(">")]),s._v("Say hi"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"say('what')\"")]),s._v(">")]),s._v("Say what"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("事件处理方法"),t("code",[s._v("$event")])])]),t("p",[s._v("需要在内联语句处理器中访问原始的"),t("code",{pre:!0},[s._v("DOM")]),s._v("事件。可以用特殊变量"),t("code",{pre:!0},[s._v("$event")]),s._v("把它传入方法")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" example4 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#example-4"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("warn")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("message, event")]),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 现在我们可以访问原生事件对象")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (event) {\n       event.preventDefault();\n     }\n     alert(message);\n   }\n }\n});\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example-4"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"warn('Form cannot be submitted yet.', $event)\"")]),s._v(">")]),s._v("\n   Submit\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("事件修饰符")])]),t("p",[s._v("Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。")]),t("ol",[t("li",[s._v("使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。")]),t("li",[s._v("用"),t("code",{pre:!0},[s._v("v-on:click.prevent.self")]),s._v("会阻止所有的点击，")]),t("li",[t("code",{pre:!0},[s._v("v-on:click.self.prevent")]),s._v("只会阻止对元素自身的点击。")]),t("li",[t("code",{pre:!0},[s._v("addEventListener")]),s._v("中的"),t("code",{pre:!0},[s._v("passive")]),s._v("选项提供了"),t("code",{pre:!0},[s._v(".passive")]),s._v("修饰符。")]),t("li",[s._v("不要把"),t("code",{pre:!0},[s._v(".passive")]),s._v("和"),t("code",{pre:!0},[s._v(".prevent")]),s._v("一起使用，因为"),t("code",{pre:!0},[s._v(".prevent")]),s._v("将会被忽略，同时浏览器可能会向你展示一个警告。")]),t("li",[s._v("请记住，"),t("code",{pre:!0},[s._v(".passive")]),s._v("会告诉浏览器你不想阻止事件的默认行为。")])]),t("blockquote",[t("p",[s._v("使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 阻止单击事件继续传播 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click.stop")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doThis"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 提交事件不再重载页面 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:submit.prevent")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onSubmit"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 修饰符可以串联 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click.stop.prevent")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doThat"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 只有修饰符 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:submit.prevent")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 添加事件监听器时使用事件捕获模式 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click.capture")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doThis"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 只当在 event.target 是当前元素自身时触发处理函数 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 即事件不是从内部元素触发的 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click.self")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doThat"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 点击事件将只会触发一次 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click.once")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doThis"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 而不会等待`onScroll`完成  --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 这其中包含`event.preventDefault()`的情况 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:scroll.passive")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onScroll"')]),s._v(">")]),s._v("..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("按键修饰符")])]),t("ol",[t("li",[t("code",{pre:!0},[s._v(".enter")])]),t("li",[t("code",{pre:!0},[s._v(".tab")])]),t("li",[t("code",{pre:!0},[s._v(".delete")]),s._v("(捕获“删除”和“退格”键)")]),t("li",[t("code",{pre:!0},[s._v(".esc")])]),t("li",[t("code",{pre:!0},[s._v(".space")])]),t("li",[t("code",{pre:!0},[s._v(".up")])]),t("li",[t("code",{pre:!0},[s._v(".down")])]),t("li",[t("code",{pre:!0},[s._v(".left")])]),t("li",[t("code",{pre:!0},[s._v(".right")])]),t("li",[t("code",{pre:!0},[s._v(".page-down")])])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//  config.keyCodes 对象自定义按键修饰符别名：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 可以使用`v-on:keyup.f1`")]),s._v("\nVue.config.keyCodes.f1 = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("112")]),s._v(";\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 只有在`keyCode`是 13 时调用`vm.submit()`--\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:keyup.13")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submit"')]),s._v(" />")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 同上 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:keyup.enter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submit"')]),s._v(" />")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@keyup.page-down")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPageDown"')]),s._v(" />")]),s._v("\n")])])],2),t("p",[s._v(":::")]),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("系统修饰键")])]),t("ol",[t("li",[t("code",{pre:!0},[s._v(".ctrl")])]),t("li",[t("code",{pre:!0},[s._v(".alt")])]),t("li",[t("code",{pre:!0},[s._v(".shift")])]),t("li",[t("code",{pre:!0},[s._v(".meta")]),s._v("//在 Mac 系统键盘上，"),t("code",{pre:!0},[s._v("meta")]),s._v("对应"),t("code",{pre:!0},[s._v("command 键 (⌘)")]),s._v("。在"),t("code",{pre:!0},[s._v("Windows")]),s._v("系统键盘"),t("code",{pre:!0},[s._v("meta")]),s._v("对应"),t("code",{pre:!0},[s._v("Windows 徽标键 (⊞)")]),s._v("。")]),t("li",[t("code",{pre:!0},[s._v(".exact")]),s._v("修饰符允许你控制由精确的系统修饰符组合触发的事件。")]),t("li",[t("code",{pre:!0},[s._v(".left")])]),t("li",[t("code",{pre:!0},[s._v(".right")])]),t("li",[t("code",{pre:!0},[s._v(".middle")])])]),t("blockquote",[t("p",[s._v("请注意修饰键与常规按键不同，在和"),t("code",{pre:!0},[s._v("keyup")]),s._v("事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住"),t("code",{pre:!0},[s._v("ctrl")]),s._v("的情况下释放其它按键，才能触发"),t("code",{pre:!0},[s._v("keyup.ctrl")]),s._v("。而单单释放"),t("code",{pre:!0},[s._v("ctrl")]),s._v("也不会触发事件。如果你想要这样的行为，请为"),t("code",{pre:!0},[s._v("ctrl")]),s._v("换用"),t("code",{pre:!0},[s._v("keyCode：keyup.17")]),s._v("。")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//  config.keyCodes 对象自定义按键修饰符别名：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 可以使用`v-on:keyup.f1`")]),s._v("\nVue.config.keyCodes.f1 = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("112")]),s._v(";\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- Alt + C --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@keyup.alt.67")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(" />")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- Ctrl + Click --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click.ctrl")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doSomething"')]),s._v(">")]),s._v("Do something"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 即使 Alt 或 Shift 被一同按下时也会触发 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click.ctrl")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClick"')]),s._v(">")]),s._v("A"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 有且只有 Ctrl 被按下的时候才触发 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click.ctrl.exact")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onCtrlClick"')]),s._v(">")]),s._v("A"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 没有任何系统修饰符被按下的时候才触发 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click.exact")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClick"')]),s._v(">")]),s._v("A"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[t("code",[s._v("HTML")]),s._v("中监听事件")])]),t("p",[t("code",{pre:!0},[s._v("Vue.js")]),s._v("事件处理方法和表达式都严格绑定在当前视图的"),t("code",{pre:!0},[s._v("ViewModel")]),s._v("上，它不会导致任何维护上的困难。")]),t("ol",[t("li",[s._v("扫一眼"),t("code",{pre:!0},[s._v("HTML")]),s._v("模板便能轻松定位在"),t("code",{pre:!0},[s._v("JavaScript")]),s._v("代码里对应的方法。")]),t("li",[s._v("因为你无须在"),t("code",{pre:!0},[s._v("JavaScript")]),s._v("里手动绑定事件，你的"),t("code",{pre:!0},[s._v("ViewModel")]),s._v("代码可以是非常纯粹的逻辑，和"),t("code",{pre:!0},[s._v("DOM")]),s._v("完全解耦，更易于测试。")]),t("li",[s._v("当一个"),t("code",{pre:!0},[s._v("ViewModel")]),s._v("被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。")])])],2)],1)},r=[],p=t("2877"),v={},l=Object(p["a"])(v,e,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21ae79.3bbcd707.js.map