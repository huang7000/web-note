(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2157"],{2333:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("获取 GET 请求内容")])]),t("p",[s._v("基本语法结构说明")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" url = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" util = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"util"')]),s._v(");\nhttp\n .createServer("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("req, res")]),s._v(") ")]),s._v("{\n   res.writeHead("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Content-Type"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/plain; charset=utf-8"')]),s._v(" });\n   res.end(util.inspect(url.parse(req.url, "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")));\n })\n .listen("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(");\n")])]),t("p",[s._v("获取 URL 的参数")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" url = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" util = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"util"')]),s._v(");\nhttp\n .createServer("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("req, res")]),s._v(") ")]),s._v("{\n   res.writeHead("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Content-Type"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/plain"')]),s._v(" });\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 解析 url 参数")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" params = url.parse(req.url, "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(").query;\n   res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"网站名："')]),s._v(" + params.name);\n   res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"\\n"')]),s._v(");\n   res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"网站 URL："')]),s._v(" + params.url);\n   res.end();\n })\n .listen("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(");\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("获取 GET 请求内容")])]),t("p",[s._v("基本语法结构说明")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" querystring = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"querystring"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" util = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"util"')]),s._v(");\n\nhttp\n .createServer("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("req, res")]),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 定义了一个post变量，用于暂存请求体的信息")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" post = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中")]),s._v("\n   req.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("chunk")]),s._v(") ")]),s._v("{\n     post += chunk;\n   });\n\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。")]),s._v("\n   req.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     post = querystring.parse(post);\n     res.end(util.inspect(post));\n   });\n })\n .listen("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(");\n")])]),t("p",[s._v("实例表单通过 POST 提交并输出数据")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" querystring = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"querystring"')]),s._v(");\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" postHTML =\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<html><head><meta charset=\"utf-8\"><title>菜鸟教程 Node.js 实例</title></head>'")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<body>"')]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<form method=\"post\">'")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'网站名： <input name=\"name\"><br>'")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'网站 URL： <input name=\"url\"><br>'")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<input type=\"submit\">'")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"</form>"')]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"</body></html>"')]),s._v(";\n\nhttp\n .createServer("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("req, res")]),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" body = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n   req.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("chunk")]),s._v(") ")]),s._v("{\n     body += chunk;\n   });\n   req.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 解析参数")]),s._v("\n     body = querystring.parse(body);\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 设置响应头部信息及编码")]),s._v("\n     res.writeHead("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Content-Type"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/html; charset=utf8"')]),s._v(" });\n\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (body.name && body.url) {\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 输出提交的数据")]),s._v("\n       res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"网站名："')]),s._v(" + body.name);\n       res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<br>"')]),s._v(");\n       res.write("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"网站 URL："')]),s._v(" + body.url);\n     } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 输出表单")]),s._v("\n       res.write(postHTML);\n     }\n     res.end();\n   });\n })\n .listen("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(");\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("Web 应用架构")])]),t("ol",[t("li",[s._v("Web 服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，Web 服务器的基本功能就是提供 Web 信息浏览服务。")]),t("li",[s._v("它只需支持 HTTP 协议、HTML 文档格式及 URL，与客户端的网络浏览器配合。")]),t("li",[s._v("Web 服务器都支持服务端的脚本语言（php、python、ruby）等，并通过脚本语言从数据库获取数据，将结果返回给客户端浏览器。")]),t("li",[s._v("目前最主流的三个 Web 服务器是 Apache、Nginx、IIS。")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("Web 应用架构")])]),t("p",[t("img",{attrs:{src:"/src/assets/images/web_architecture.jpg",alt:"Web 应用架构"}})]),t("ol",[t("li",[s._v("Client - 客户端，一般指浏览器，浏览器可以通过 HTTP 协议向服务器请求数据。")]),t("li",[s._v("Server - 服务端，一般指 Web 服务器，可以接收客户端请求，并向客户端发送响应数据。")]),t("li",[s._v("Business - 业务层， 通过 Web 服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。")]),t("li",[s._v("Data - 数据层，一般由数据库组成。")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("使用 Node 创建 Web 应用架构")])]),t("p",[s._v("Web 服务器server.js")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" fs = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fs"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" url = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(");\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建服务器")]),s._v("\nhttp\n .createServer("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("request, response")]),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 解析请求，包括文件名")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" pathname = url.parse(request.url).pathname;\n\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 输出请求的文件名")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Request for "')]),s._v(" + pathname + "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" received."')]),s._v(");\n\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 从文件系统中读取请求的文件内容")]),s._v("\n   fs.readFile(pathname.substr("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("), "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("err, data")]),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (err) {\n       "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(err);\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// HTTP 状态码: 404 : NOT FOUND")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Content Type: text/html")]),s._v("\n       response.writeHead("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("404")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Content-Type"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/html"')]),s._v(" });\n     } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// HTTP 状态码: 200 : OK")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Content Type: text/html")]),s._v("\n       response.writeHead("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Content-Type"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/html"')]),s._v(" });\n\n       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 响应文件内容")]),s._v("\n       response.write(data.toString());\n     }\n     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//  发送响应数据")]),s._v("\n     response.end();\n   });\n })\n .listen("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8080")]),s._v(");\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 控制台会输出以下信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Server running at http://127.0.0.1:8080/"')]),s._v(");\n")])]),t("p",[s._v("index.html 文件")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("<!DOCTYPE "),t("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("html")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("charset")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"utf-8"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("菜鸟教程(runoob.com)"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("我的第一个标题"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("我的第一个段落。"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])]),t("p",[s._v("Web 客户端client.js")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http"')]),s._v(");\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 用于请求的选项")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" options = {\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("host")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"localhost"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("port")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"8080"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/index.html"')]),s._v(",\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 处理响应的回调函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" callback = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("response")]),s._v(") ")]),s._v("{\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 不断更新数据")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" body = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n response.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(") ")]),s._v("{\n   body += data;\n });\n response.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 数据接收完成")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(body);\n });\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 向服务端发送请求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" req = http.request(options, callback);\nreq.end();\n")])])],2)],1)},n=[],e=t("2877"),p={},l=Object(e["a"])(p,r,n,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2157.91ed3a9a.js.map