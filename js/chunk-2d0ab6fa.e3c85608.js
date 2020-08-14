(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab6fa"],{"14ef":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("TypeScript 简介")])]),a("ol",[a("li",[s._v("TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。")]),a("li",[s._v("TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("TypeScript 安装编译")])]),a("ol",[a("li",[s._v("基于 npm 安装 TypeScript")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-bash"},[s._v("bash")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install -g typescript\nnpm i typescript -g\ntsc --init\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dev"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tsc -watch -p ./"')]),s._v(",\nnpm run dev\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("构建你的第一个 TypeScript 文件 "),a("code",{pre:!0},[s._v("greeter.ts")])])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane User"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("编译代码，输出 "),a("code",{pre:!0},[s._v("greeter.js")]),s._v(" 文件")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-bash"},[s._v("bash")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("tsc greeter.ts\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("类型注解")])]),a("p",[s._v("TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")])]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("];\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("blockquote",[a("p",[s._v("编译报错：greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.\n检查参数是否符合预期，不符合进行错误提示，javascript 文件还是会编译成功可以执行")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("接口")])]),a("p",[s._v("在 TypeScript 里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。\n这就允许在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Person {\n firstName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n lastName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: Person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person.firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + person.lastName;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = { firstName: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane"')]),s._v(", lastName: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"User"')]),s._v(" };\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("类")])]),a("p",[s._v("TypeScript 支持基于类的面向对象编程。")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" Student {\n fullName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" firstName:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" middleInitial:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" lastName:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")])]),s._v(") {\n   "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".fullName = firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + middleInitial + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + lastName;\n }\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Person {\n firstName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n lastName: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(";\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("greeter")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("person: Person")]),s._v(") ")]),s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + person.firstName + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(" + person.lastName;\n}\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" user = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Student("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jane"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M."')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"User"')]),s._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.innerHTML = greeter(user);\n")])]),a("blockquote",[a("p",[s._v("在构造函数的参数上使用 public 等同于创建了同名的成员变量")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("运行 TypeScript Web 应用")])]),a("p",[s._v("引入编译后的 JavaScript 文件执行操作")]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("<!DOCTYPE "),a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("TypeScript Greeter"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"greeter.js"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])])],2),a("hv-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[s._v("tsconfig.json 各项配置注解")])]),a("div",{staticClass:"hv-snippet--tag hv-snippet--tag-json"},[s._v("json")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[s._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"compilerOptions"')]),s._v(": {\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Basic Options */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"target"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"es5"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* target用于指定编译之后的版本目标 version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"module"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"commonjs"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"lib"')]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"es6"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dom"')]),s._v("],\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* lib用于指定要包含在编译中的库文件，这个我们在前面的课程中讲过一点，如果你要使用一些ES6的新语法，你需要引入ES6这个库，或者也可以写ES2015。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"allowJs"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* allowJs设置的值为true或false，用来指定是否允许编译JS文件，默认是false，即不编译JS文件。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"checkJs"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* checkJs的值为true或false，用来指定是否检查和报告JS文件中的错误，默认是false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"jsx"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"preserve"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"declaration"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('/* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true。 */')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"declarationMap"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 值为true或false，指定是否为声明文件.d.ts生成map文件 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"sourceMap"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* sourceMap的值为true或false，用来指定编译时是否生成.map文件。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"outFile"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('/* outFile用于指定将输出文件合并为一个文件，他的值为一个文件路径名，比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module\b的值为amd和system模块时才支持这个配置。 */')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"outDir"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"rootDir"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"composite"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 是否编译构建引用项目 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"removeComments"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* removeComments值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noEmit"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 不生成编译文件，这个一般很少用了。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"importHelpers"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"downlevelIteration"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 当target为“ES5”或“ES3”时，为“for-of”、“spread”和“destructuring”中的迭代器提供完全支持。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"isolatedModules"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定。 */")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Strict Type-Checking Options */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"strict"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noImplicitAny"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any类型，如果将noImplicitAny设为true，则如果没有设置明确的类型会报错，默认值为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"strictNullChecks"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* strictNullChecks的值为true或false，这个配置项我们在前面课程讲过了，当设为true时，null和undefined值不能赋值给非这两种类型的值，别的类型的值也不能赋给他们， 除了any类型，还有个例外就是undefined可以赋值给void类型。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"strictFunctionTypes"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* strictFunctionTypes的值为true或false，用来指定是否使用函数参数双向协变检查。还记得我们讲类型兼容性的时候讲过函数参数双向协变的这个例子： */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"strictBindCallApply"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* strictBindCallApply的值为true或false，设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"strictPropertyInitialization"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* strictPropertyInitialization的值为true或false，设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noImplicitThis"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 当 this表达式的值为 any类型的时候，生成一个错误。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"alwaysStrict"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('/* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的JS文件中加入"use strict"字符串，用来告诉浏览器该JS为严格模式。 */')]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Additional Checks */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noUnusedLocals"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* noUnusedLocals的值为true或false，用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用ESLint可以在你书写代码的时候做提示，你可以配合使用。他的默认值为false */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noUnusedParameters"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* noUnusedParameters的值为true或false，用于检查是否有在函数体中没有使用的参数，这个也可以配合ESLint来做检查，他默认是false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noImplicitReturns"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* noImplicitReturns的值为true或false，用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"noFallthroughCasesInSwitch"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* noFallthroughCasesInSwitch的值为true或false，用于检查switch中是否有case没有使用break跳出switch，默认为false。 */")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Module Resolution Options */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"moduleResolution"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"node"')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('/* moduleResolution用于选择模块解析策略，有"node"和"classic"两种类型，我们在讲模块解析的时候已经讲过了。 */')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"baseUrl"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"."')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"paths"')]),s._v(": {\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"*"')]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"node_modules/@types"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"src/typings"')]),s._v("]\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* paths用于设置模块名到基于baseUrl的路径映射 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"rootDirs"')]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"src/module"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"src/core"')]),s._v("],\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径中的内容都放到一个文件夹中. */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"typeRoots"')]),s._v(": [],\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"types"')]),s._v(": [],\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"allowSyntheticDefaultImports"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* allowSyntheticDefaultImports的值为true或false，用来指定允许从没有默认导出的模块中默认导入。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"esModuleInterop"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"preserveSymlinks"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */")]),s._v(",\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Source Map Options */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"sourceRoot"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"mapRoot"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"inlineSourceMap"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* inlineSourceMap值为true或false，指定是否将map文件的内容和js文件编译在一个同一个js文件中，如果设为true，则map的内容会以# sourceMappingURL=然后接base64字符串的形式插入在js文件底部。 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"inlineSources"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* inlineSources的值是true或false，用于指定是否进一步将.ts文件的内容也包含到输出文件中。 */")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* Experimental Options */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"experimentalDecorators"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* experimentalDecorators的值是true或false，用于指定是否启用实验性的装饰器特性 */")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"emitDecoratorMetadata"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* emitDecoratorMetadata的值为true或false，用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */")]),s._v("\n },\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"files"')]),s._v(": [],\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*  files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件。如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? ** 等通配符*/")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"include"')]),s._v(": [],\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('/*    include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件。*/')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"exclude"')]),s._v(": [],\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*exclude表示要排除的、不编译的文件，他也可以指定一个列表，规则和include一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，可以使用通配符。*/")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"extends"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件.*/")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"compileOnSave"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*compileOnSave的值是true或false，如果设为true，在我们编辑了项目中文件保存的时候，编辑器会根据tsconfig.json的配置重新生成文件，不过这个要编辑器支持。*/")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"references"')]),s._v(": []\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*一个对象数组，指定要引用的项目*/")]),s._v("\n}\n")])])],2)],1)},e=[],l=a("2877"),n={},p=Object(l["a"])(n,r,e,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0ab6fa.e3c85608.js.map