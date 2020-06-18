(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22b973"],{f02e:function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("插件")])]),e("p",[s._v("插件通常用来为 Vue 添加全局功能。\n通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：\nVue.use 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。")]),e("ol",[e("li",[s._v("添加全局方法或者 property。如：vue-custom-element")]),e("li",[s._v("加全局资源：指令/过滤器/过渡等。如 vue-touch")]),e("li",[s._v("过全局混入来添加一些组件选项。如 vue-router")]),e("li",[s._v("添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。")]),e("li",[s._v("一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("开发插件")])]),e("p",[s._v("通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：\nVue.use 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。")]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("MyPlugin.install = "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue, options")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1. 添加全局方法或 property")]),s._v("\n Vue.myGlobalMethod = "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 逻辑...")]),s._v("\n }\n\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 2. 添加全局资源")]),s._v("\n Vue.directive("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'my-directive'")]),s._v(", {\n   bind (el, binding, vnode, oldVnode) {\n     "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 逻辑...")]),s._v("\n   }\n   ...\n })\n\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 3. 注入组件选项")]),s._v("\n Vue.mixin({\n   "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 逻辑...")]),s._v("\n   }\n   ...\n })\n\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 4. 添加实例方法")]),s._v("\n Vue.prototype.$myMethod = "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("methodOptions")]),s._v(") ")]),s._v("{\n   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 逻辑...")]),s._v("\n }\n}\n")])])],2)],1)},a=[],p=e("2877"),r={},l=Object(p["a"])(r,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22b973.41f380c7.js.map