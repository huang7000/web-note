(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c804a"],{"52a8":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("在 Vue 组件中获得 Vuex 状态")])]),a("p",[s._v("store 实例中读取状态最简单的方法就是在计算属性中返回某个状态")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建一个 Counter 组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" Counter = {\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`<div>{{ count }}</div>`")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   count () {\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$store.state.count\n   }\n }\n}\n")])]),a("p",[s._v("Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" app = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件")]),s._v("\n store,\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { Counter },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`\n   <div class="app">\n     <counter></counter>\n   </div>\n `')]),s._v("\n})\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("mapState 辅助函数")])]),a("p",[s._v("使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在单独构建的版本中辅助函数为 Vuex.mapState")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { mapState } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vuex'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": mapState({\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 箭头函数可使代码更简练")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("state")]),s._v(" =>")]),s._v(" state.count,\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 传字符串参数 'count' 等同于 `state => state.count`")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("countAlias")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v(",\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 为了能够使用 `this` 获取局部状态，必须使用常规函数")]),s._v("\n   countPlusLocalState (state) {\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" state.count + "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".localCount\n   }\n })\n}\n")])]),a("p",[s._v("当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("computed: mapState([\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 映射 this.count 为 store.state.count")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v("\n])\n")])]),a("p",[s._v("mapState 辅助函数使用对象展开运算符")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("computed: {\n localComputed () { "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v(" },\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用对象展开运算符将此对象混入到外部对象中")]),s._v("\n ...mapState({\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n })\n}\n")])])],2)],1)},p=[],r=a("2877"),n={},v=Object(r["a"])(n,e,p,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c804a.671f606e.js.map