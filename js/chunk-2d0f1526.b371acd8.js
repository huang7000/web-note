(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1526"],{"9fad":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("Action")])]),a("p",[s._v("Action 类似于 mutation，不同在于：\nAction 提交的是 mutation，而不是直接变更状态。\nAction 可以包含任意异步操作。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" store = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vuex.Store({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mutations")]),s._v(": {\n   increment (state) {\n     state.count++\n   }\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": {\n   increment (context) {\n     context.commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'increment'")]),s._v(")\n   }\n }\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 参数解构 来简化代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": {\n increment ({ commit }) {\n   commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'increment'")]),s._v(")\n }\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("分发 Action")])]),a("blockquote",[a("p",[s._v("可以在 action 内部执行异步操作")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("actions: {\n incrementAsync ({ commit }) {\n   setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n     commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'increment'")]),s._v(")\n   }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n }\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Action 通过 store.dispatch 方法触发：")]),s._v("\nstore.dispatch("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'increment'")]),s._v(")\n")])]),a("p",[s._v("Actions 支持同样的载荷方式和对象方式进行分发：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 以载荷形式分发")]),s._v("\nstore.dispatch("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"incrementAsync"')]),s._v(", {\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n});\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 以对象形式分发")]),s._v("\nstore.dispatch({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"incrementAsync"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n});\n")])]),a("p",[s._v("购物车示例，涉及到调用异步 API 和分发多重 mutation")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("actions: {\n checkout ({ commit, state }, products) {\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 把当前购物车的物品备份起来")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" savedCartItems = [...state.cart.added]\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 发出结账请求，然后乐观地清空购物车")]),s._v("\n   commit(types.CHECKOUT_REQUEST)\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 购物 API 接受一个成功回调和一个失败回调")]),s._v("\n   shop.buyProducts(\n     products,\n     "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 成功操作")]),s._v("\n     () => commit(types.CHECKOUT_SUCCESS),\n     "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 失败操作")]),s._v("\n     () => commit(types.CHECKOUT_FAILURE, savedCartItems)\n   )\n }\n}\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("在组件中分发 Action")])]),a("p",[s._v("组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { mapActions } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vuex"')]),s._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   ...mapActions([\n     "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"increment"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`")]),s._v("\n\n     "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// `mapActions` 也支持载荷：")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"incrementBy"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`")]),s._v("\n   ]),\n   ...mapActions({\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("add")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"increment"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将 `this.add()` 映射为 `this.$store.dispatch('increment')`")]),s._v("\n   }),\n },\n};\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("组合 Action")])]),a("p",[s._v("store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("actions: {\n actionA ({ commit }) {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n     setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n       commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'someMutation'")]),s._v(")\n       resolve()\n     }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n   })\n }\n}\n")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("store.dispatch("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"actionA"')]),s._v(").then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n});\n")])]),a("p",[s._v("在另外一个 action 中也可以：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("store.dispatch("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"actionA"')]),s._v(").then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n});\n")])]),a("p",[s._v("利用 async / await，我们可以如下组合 action：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 假设 getData() 和 getOtherData() 返回的是 Promise")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": {\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" actionA ({ commit }) {\n   commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gotData'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" getData())\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" actionB ({ dispatch, commit }) {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" dispatch("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'actionA'")]),s._v(") "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 等待 actionA 完成")]),s._v("\n   commit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gotOtherData'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" getOtherData())\n }\n}\n")])])],2)],1)},r=[],e=a("2877"),p={},c=Object(e["a"])(p,n,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0f1526.b371acd8.js.map