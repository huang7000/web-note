(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8b4"],{f44d:function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("数字枚举")])]),e("p",[s._v("Up 使用初始化为 1(默认是 0)。 其余的成员会从 1 开始自动增长。")]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Direction {\n Up = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n Down,\n Left,\n Right,\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Response {\n No = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n Yes = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("respond")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("recipient: "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v(", message: Response")]),s._v("): "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("void")]),s._v(" ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n}\nrespond("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Princess Caroline"')]),s._v(", Response.Yes);\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" E {\n A,\n B,\n C = A + B,\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" F {\n A,\n C = A + B, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// error! 'A' is not constant-initialized, so 'B' needs an initializer")]),s._v("\n B,\n}\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("字符串枚举")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Direction {\n Up = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"UP"')]),s._v(",\n Down = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"DOWN"')]),s._v(",\n Left = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT"')]),s._v(",\n Right = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"RIGHT"')]),s._v(",\n}\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("异构枚举(不建议)")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" BooleanLikeHeterogeneousEnum {\n No = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n Yes = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"YES"')]),s._v(",\n}\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("计算的和常量成员")])]),e("p",[s._v("一个常量枚举表达式\n一个枚举表达式字面量（主要是字符串字面量或数字字面量）\n一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）\n带括号的常量枚举表达式\n一元运算符 +, -, ~其中之一应用在了常量枚举表达式\n常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错。")]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// A= 3, B=4,C=5")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" E1 {\n A = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(",\n B,\n C,\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//A= 0, B=5,C=6")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" E2 {\n A,\n B = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n C,\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" FileAccess {\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// constant members")]),s._v("\n None,\n Read = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" << "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n Write = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" << "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n ReadWrite = Read | Write,\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// computed member")]),s._v("\n G = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"123"')]),s._v(".length,\n}\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("联合枚举与枚举成员的类型")])]),e("p",[s._v("存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为")]),e("p",[s._v('任何字符串字面量（例如： "foo"， "bar"， "baz"）\n任何数字字面量（例如： 1, 100）\n应用了一元 -符号的数字字面量（例如： -1, -100）')]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" ShapeKind {\n Circle,\n Square,\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Circle {\n kind: ShapeKind.Circle;\n radius: "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("number")]),s._v(";\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Square {\n kind: ShapeKind.Square;\n sideLength: "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("number")]),s._v(";\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" c: Circle = {\n kind: ShapeKind.Square,\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//    ~~~~~~~~~~~~~~~~ Error!")]),s._v("\n radius: "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n};\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" E {\n Foo,\n Bar,\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("g")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("x: E")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (x !== E.Foo) {\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (x !== E.Bar) {\n }\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("f")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("x: E")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (x !== E.Foo || x !== E.Bar) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//             ~~~~~~~~~~~")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.")]),s._v("\n }\n}\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("运行时的枚举")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" E {\n   X, Y, Z\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("f")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("obj: { X: "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("number")]),s._v(" }")]),s._v(") ")]),s._v("{\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" obj.X;\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Works, since 'E' has a property named 'X' which is a number.")]),s._v("\nf(E);\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("反向映射")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Enum {\n   A\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" a = Enum.A;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" nameOfA = Enum[a]; "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// "A"')]),s._v("\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("const枚举")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Enum {\n   A = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n   B = A * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Directions {\n   Up,\n   Down,\n   Left,\n   Right\n}\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]\n")])])],2),e("hv-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("外部枚举")])]),e("div",{staticClass:"hv-snippet--tag hv-snippet--tag-typescript"},[s._v("typescript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("enum")]),s._v(" Enum {\n   A = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n   B,\n   C = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n}\n")])])],2)],1)},a=[],r=e("2877"),p={},l=Object(r["a"])(p,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22c8b4.5baca764.js.map