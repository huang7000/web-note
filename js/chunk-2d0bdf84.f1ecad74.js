(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdf84"],{"2dea":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("混入基础")])]),a("p",[s._v("混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。")]),a("blockquote",[a("p",[s._v("当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("数据对象选项合并")])]),a("p",[s._v("数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" mixin = {\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hello"')]),s._v(",\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"abc"')]),s._v(",\n   };\n },\n};\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [mixin],\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"goodbye"')]),s._v(",\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"def"')]),s._v(",\n   };\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$data);\n },\n});\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("钩子函数选项合并")])]),a("blockquote",[a("p",[s._v("同名钩子函数将合并为一个数组，因此都将被调用。\n另外，混入对象的钩子将在组件自身钩子之前调用。")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" mixin = {\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"混入对象的钩子被调用"')]),s._v(");\n },\n};\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [mixin],\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"组件钩子被调用"')]),s._v(");\n },\n});\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("对象的钩子函数选项合并")])]),a("p",[s._v("值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" mixin = {\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"foo"')]),s._v(");\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("conflicting")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"from mixin"')]),s._v(");\n   },\n },\n};\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vm = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [mixin],\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bar"')]),s._v(");\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("conflicting")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"from self"')]),s._v(");\n   },\n },\n});\n\nvm.foo(); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// => "foo"')]),s._v("\nvm.bar(); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// => "bar"')]),s._v("\nvm.conflicting(); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// => "from self"')]),s._v("\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("全局混入")])]),a("p",[s._v("混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。")]),a("blockquote",[a("p",[s._v("请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为插件发布，以避免重复应用混入。")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 为自定义的选项 'myOption' 注入一个处理器。")]),s._v("\nVue.mixin({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" myOption = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$options.myOption\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (myOption) {\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(myOption)\n   }\n }\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("myOption")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'hello!'")]),s._v("\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// => "hello!"')]),s._v("\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("自定义选项合并策略")])]),a("p",[s._v("自定义选项将使用默认策略，即简单地覆盖已有值。如果想让自定义选项以自定义逻辑合并，可以向 Vue.config.optionMergeStrategies 添加一个函数：")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.config.optionMergeStrategies.myOption = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("toVal, fromVal")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 返回合并后的值")]),s._v("\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//对于多数值为对象的选项，可以使用与 methods 相同的合并策略")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" strategies = Vue.config.optionMergeStrategies\nstrategies.myOption = strategies.methods\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//例子")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" merge = Vue.config.optionMergeStrategies.computed\nVue.config.optionMergeStrategies.vuex = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("toVal, fromVal")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!toVal) "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" fromVal\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!fromVal) "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" toVal\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("getters")]),s._v(": merge(toVal.getters, fromVal.getters),\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": merge(toVal.state, fromVal.state),\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": merge(toVal.actions, fromVal.actions)\n }\n}\n")])])],2)],1)},n=[],e=a("2877"),p={},l=Object(e["a"])(p,r,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0bdf84.f1ecad74.js.map