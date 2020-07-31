(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22e0de"],{f9b7:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Getter")])]),a("p",[s._v("Getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。\nGetter 接受 state 作为其第一个参数：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" store = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vuex.Store({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("todos")]),s._v(": [\n     { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'...'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("done")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" },\n     { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'...'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("done")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n   ]\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("getters")]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doneTodos")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state")]),s._v(" =>")]),s._v(" {\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state.todos.filter("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("todo")]),s._v(" =>")]),s._v(" todo.done)\n   }\n }\n})\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("通过属性访问")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：")]),s._v("\nstore.getters.doneTodos "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// -> [{ id: 1, text: '...', done: true }]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Getter 也可以接受其他 getter 作为第二个参数：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("getters")]),s._v(": {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doneTodosCount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state, getters")]),s._v(") =>")]),s._v(" {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" getters.doneTodos.length\n }\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//在任何组件中使用它：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n doneTodosCount () {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$store.getters.doneTodosCount\n }\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("通过方法访问")])]),a("p",[s._v("让 getter 返回一个函数，来实现给 getter 传参。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("getters: {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("getTodoById")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state")]),s._v(") =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("id")]),s._v(") =>")]),s._v(" {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state.todos.find("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("todo")]),s._v(" =>")]),s._v(" todo.id === id)\n }\n}\nstore.getters.getTodoById("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// -> { id: 2, text: '...', done: false }")]),s._v("\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("mapGetters 辅助函数")])]),a("p",[s._v("mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { mapGetters } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vuex'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用对象展开运算符将 getter 混入 computed 对象中")]),s._v("\n   ...mapGetters([\n     "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'doneTodosCount'")]),s._v(",\n     "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'anotherGetter'")]),s._v(",\n     "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n   ])\n }\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//将一个 getter 属性另取一个名字，使用对象形式：")]),s._v("\n...mapGetters({\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("doneCount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'doneTodosCount'")]),s._v("\n})\n\n")])])],2)],1)},r=[],n=a("2877"),p={},l=Object(n["a"])(p,e,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22e0de.fdb52cc1.js.map