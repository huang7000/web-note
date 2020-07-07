(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4c4c"],{9241:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("TypeScript 简介")])]),a("ol",[a("li",[s._v("TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。")]),a("li",[s._v("TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("TypeScript 安装编译")])]),a("ol",[a("li",[s._v("基于 npm 安装 TypeScript")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-bash"},[s._v("bash")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install -g typescript\nnpm i typescript -g\ntsc --init\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dev"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tsc -watch -p ./"')]),s._v(",\nnpm run dev\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("构建你的第一个 TypeScript 文件 "),a("code",{pre:!0},[s._v("greeter.ts")])])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane User"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("编译代码，输出 "),a("code",{pre:!0},[s._v("greeter.js")]),s._v(" 文件")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-bash"},[s._v("bash")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("tsc greeter.ts\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("类型注解")])]),a("p",[s._v("TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")])]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("];\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("blockquote",[a("p",[s._v("编译报错：greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.\n检查参数是否符合预期，不符合进行错误提示，javascript 文件还是会编译成功可以执行")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("接口")])]),a("p",[s._v("在 TypeScript 里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。\n这就允许在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Person {\n firstName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n lastName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: Person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person.firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + person.lastName;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = { firstName: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane"')]),s._v(", lastName: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"User"')]),s._v(" };\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("类")])]),a("p",[s._v("TypeScript 支持基于类的面向对象编程。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" Student {\n fullName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" firstName:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" middleInitial:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" lastName:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")])]),s._v(") {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".fullName = firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + middleInitial + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + lastName;\n }\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Person {\n firstName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n lastName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: Person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person.firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + person.lastName;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Student("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M."')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"User"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("blockquote",[a("p",[s._v("在构造函数的参数上使用 public 等同于创建了同名的成员变量")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("运行 TypeScript Web 应用")])]),a("p",[s._v("引入编译后的 JavaScript 文件执行操作")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("<!DOCTYPE "),a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("TypeScript Greeter"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"greeter.js"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])])],2)],1)},e=[],p=a("2877"),l={},n=Object(p["a"])(l,r,e,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e4c4c.06dcfcc4.js.map