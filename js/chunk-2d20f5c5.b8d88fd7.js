(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f5c5"],{b2fe:function(e,t,p){"use strict";p.r(t);var s=function(){var e=this,t=e.$createElement,p=e._self._c||t;return p("section",[p("hv-snippet",{attrs:{title:""}},[p("template",{slot:"title"},[p("p",[e._v("三斜线指令")])]),p("p",[e._v("三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。")]),p("p",[e._v("三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。")]),p("p",[e._v("指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。\n三斜线引用告诉编译器在编译过程中要引入的额外的文件。\n当使用--out或--outFile时，它也可以做为调整输出内容顺序的一种方法。 文件在输出文件内容中的位置与经过预处理后的输入顺序一致。")]),p("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[e._v("typescript")]),p("pre",{pre:!0},[p("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[p("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v('/// <reference path="..." />')]),e._v("\n"),p("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v('/// <reference path="..." />')]),e._v("\n\n")])]),p("ol",[p("li",[p("p",[e._v('预处理输入文件\n编译器会对输入文件进行预处理来解析所有三斜线引用指令。 在这个过程中，额外的文件会加到编译过程中。\n这个过程会以一些根文件开始； 它们是在命令行中指定的文件或是在 tsconfig.json中的"files"列表里的文件。\n一个三斜线引用路径是相对于包含它的文件的，如果不是根文件。')])]),p("li",[p("p",[e._v("错误\n引用不存在的文件会报错。 一个文件用三斜线指令引用自己会报错。")])]),p("li",[p("p",[e._v("types\n/// "),p("reference",{attrs:{types:"..."}},[e._v("\n与 /// "),p("reference",{attrs:{path:"..."}},[e._v("指令相似，这个指令是用来声明 依赖的； 一个 /// "),p("reference",{attrs:{types:"..."}},[e._v("指令则声明了对某个包的依赖。")])],1)],1)],1)])]),p("p",[e._v("对这些包的名字的解析与在 import语句里对模块名的解析类似。 可以简单地把三斜线类型引用指令当做 import声明的包。")])],2)],1)},n=[],r=p("2877"),a={},c=Object(r["a"])(a,s,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d20f5c5.b8d88fd7.js.map