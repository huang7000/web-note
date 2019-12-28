(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6c98"],{"99df":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("插槽内容")])]),t("blockquote",[t("p",[t("code",{pre:!0},[s._v("<navigation-link>")]),s._v(" 没有包含一个 "),t("code",{pre:!0},[s._v("<slot>")]),s._v(" 元素，则任何传入它的内容都会被抛弃")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app01"')]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("navigation-link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/profile"')]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fa fa-user"')]),s._v(">")]),s._v("ceshi "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n       Your Profile {{ username }}\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("navigation-link")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'navigation-link'")]),s._v(", {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'url'")]),s._v("],\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('` <a v-bind:herf="url" class="nav-link">\n                           <slot></slot>\n               </a>`')]),s._v("\n});\napp01 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app01'")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("username")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'用户名'")]),s._v("\n   }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("具名插槽")])]),t("blockquote",[t("p",[t("code",{pre:!0},[s._v("<slot>")]),s._v(" 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽：\n在向具名插槽提供内容的时候，我们可以在一个父组件的 "),t("code",{pre:!0},[s._v("<template>")]),s._v(" 元素上使用 slot 特性\n另一种 "),t("code",{pre:!0},[s._v("slot")]),s._v(" 特性的用法是直接用在一个普通的元素上\n组件模板里的 "),t("code",{pre:!0},[s._v("<slot>")]),s._v(" 标签内部指定默认的内容来做到插槽的默认内容。\n父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app02"')]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("base-layout")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"header"')]),s._v(">")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("Here might be a page title"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("test内容1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"main"')]),s._v(">")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("main内容"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("test内容2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"footer"')]),s._v(">")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Here's some contact info"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("base-layout")]),s._v(">")]),s._v("\n\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("base-layout")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"header"')]),s._v(">")]),s._v("Here might be a page title"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h2")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("test内容1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"main"')]),s._v(">")]),s._v("main内容"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("test内容2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('\x3c!-- <p slot="footer">Here\'s some contact info</p> --\x3e')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("base-layout")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'base-layout'")]),s._v(", {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`\n                   <div class="container">\n <header>\n   <slot name="header">页头</slot>\n </header>\n <main>\n   <slot name="main">内容</slot>\n </main>\n <template>\n   <slot ></slot>\n </template>\n <footer>\n   <slot name="footer">页脚</slot>\n </footer>\n</div>\n                   `')]),s._v("\n});\napp02 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app02'")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'开头'")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maintest")]),s._v(":\n           "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'达瓦大无多军哇多爱我的娃大王卡的进口量达我觉得的AWK的我的看完打开 爱我的骄傲未打卡我、‘ 、答案为了 '")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("footer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'结束'")]),s._v("\n   }\n});\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("作用域插槽")])]),t("blockquote",[t("p",[t("code",{pre:!0},[s._v("slot-scope")]),s._v(" 不再限制在"),t("code",{pre:!0},[s._v("<template>")]),s._v("元素上使用，而可以用在插槽内的任何元素或组件上。\n解构 "),t("code",{pre:!0},[s._v("slot-scope")])])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app03"')]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("todo-list")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:todos")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"todos"')]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slotProps"')]),s._v(">")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slotProps.todo.isComplete"')]),s._v(">")]),s._v("√"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n           {{ slotProps.todo.text }}\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("todo-list")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hr")]),s._v(" />")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("todo-list")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:todos")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"todos"')]),s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{ todo }"')]),s._v(">")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"todo.isComplete"')]),s._v(">")]),s._v("✓"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n           {{ todo.text }}\n       "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("todo-list")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'todo-list'")]),s._v(", {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'todos'")]),s._v("],\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`\n                   <ul>\n                   <li  v-for="todo in todos" v-bind:key="todo.id">\n                   <slot v-bind:todo="todo">\n                   {{todo.text}}\n                   </slot>\n                   </li>\n                   </ul>\n                   `')]),s._v("\n});\napp03 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app03'")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(": [\n           { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'小白'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isComplete")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" },\n           { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'小强'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isComplete")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" },\n           { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'小明'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isComplete")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" },\n           { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'咪咪'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isComplete")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" },\n           { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'妹妹'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isComplete")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n       ]\n   }\n});\n")])])],2)],1)},p=[],l=t("2877"),e={},n=Object(l["a"])(e,r,p,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e6c98.9409f84f.js.map