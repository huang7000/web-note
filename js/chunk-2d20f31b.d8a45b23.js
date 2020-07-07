(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f31b"],{b31e:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("在动态组件上使用"),t("code",[s._v("keep-alive")])])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dynamic-component-demos"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demos"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab in tabs"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['dynamic-component-demos-tab-button', { 'dynamic-component-demos-active': currentTab === tab }]\"")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentTab = tab"')]),s._v("\n >")]),s._v("\n   {{ tab }}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("component")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:is")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentTabComponent"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dynamic-component-demos-tab"')]),s._v("\n >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("component")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dynamic-component-keep-alive-demos"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demos"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 我们可以用一个 <keep-alive> 元素将其动态组件包裹起来。 失活的组件将会被缓存！--\x3e")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab in tabs"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['dynamic-component-demos-tab-button', { 'dynamic-component-demos-active': currentTab === tab }]\"")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentTab = tab"')]),s._v("\n >")]),s._v("\n   {{ tab }}\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("keep-alive")]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("component")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:is")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentTabComponent"')]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dynamic-component-demos-tab"')]),s._v("\n   >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("component")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("keep-alive")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab-posts"')]),s._v(", {\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("posts")]),s._v(": [\n       {\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"儒释道"')]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>儒心是妖，佛心是魔，道心是鬼。</p>"')]),s._v("\n       },\n       {\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"三教"')]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(":\n           "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>天地不仁，道吞万物。大爱无情，佛灭众生。 忠义荡然，儒溺千古。</p>"')]),s._v("\n       },\n       {\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"神魔非我"')]),s._v(",\n         "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>魔心开杀，神意止杀。</p>"')]),s._v("\n       }\n     ],\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectedPost")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n   };\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`<div class="dynamic-component-demos-posts-tab">\n                     <ul class="dynamic-component-demos-posts-sidebar">\n                       <li\n                         v-for="post in posts"\n                         v-bind:key="post.id"\n                         v-bind:class="{ \'dynamic-component-demos-active\': post === selectedPost }"\n                         v-on:click="selectedPost = post"\n                       >\n                         {{ post.title }}\n                       </li>\n                     </ul>\n                     <div class="dynamic-component-demos-post-container">\n                       <div\n                         v-if="selectedPost"\n                         class="dynamic-component-demos-post"\n                       >\n                         <h3>{{ selectedPost.title }}</h3>\n                         <div v-html="selectedPost.content"></div>\n                       </div>\n                       <strong v-else>\n                           点击左边的博客标题查看。\n                       </strong>\n                     </div>\n                   </div>`')]),s._v("\n});\nVue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab-archive"')]),s._v(", {\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<div>存档组件</div>"')]),s._v("\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" dynamicComponentDemo = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#dynamic-component-demos"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("currentTab")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Posts"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tabs")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Posts"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Archive"')]),s._v("]\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("currentTabComponent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab-"')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".currentTab.toLowerCase();\n   }\n }\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" dynamicComponentKeepAliveDemo = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#dynamic-component-keep-alive-demos"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("currentTab")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Posts"')]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tabs")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Posts"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Archive"')]),s._v("]\n },\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("currentTabComponent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tab-"')]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".currentTab.toLowerCase();\n   }\n }\n});\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-css"},[s._v("css")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-css"}},[t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-tab-button")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6px")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-top-left-radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3px")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-top-right-radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3px")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#ccc")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("cursor")]),s._v(": pointer;\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#f0f0f0")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-bottom")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-tab-button")]),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v(":hover")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#e0e0e0")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-tab-button")]),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-active")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#e0e0e0")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-tab")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#ccc")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-posts-tab")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-posts-sidebar")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("max-width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40vw")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("!important")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("!important")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("list-style-type")]),s._v(": none;\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#ccc")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-posts-sidebar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("white-space")]),s._v(": nowrap;\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-overflow")]),s._v(": ellipsis;\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow")]),s._v(": hidden;\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("cursor")]),s._v(": pointer;\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-posts-sidebar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v(":hover")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#eee")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-posts-sidebar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-active")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": lightblue;\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-post-container")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding-left")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".dynamic-component-demos-post")]),s._v(" > "),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),s._v(" {\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("!important")]),s._v(";\n "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding-top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("!important")]),s._v(";\n}\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("异步组件")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-a-demos"')]),s._v(">")]),s._v("\n async-a\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-a")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-a")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-b-demos"')]),s._v(">")]),s._v("\n async-b\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-b")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-b")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-c-demos"')]),s._v(">")]),s._v("\n async-c\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-c")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("async-c")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("Vue.component("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-a"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("resolve, reject")]),s._v(") ")]),s._v("{\n setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n   resolve({\n     "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<div>我是async。</div>"')]),s._v("\n   });\n   "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//  reject(reason);")]),s._v("\n }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(");\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#async-a-demos"')]),s._v("\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// //将异步组件和 webpack 的 code-splitting 功能一起配合使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Vue.component('async-b', function (resolve) {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     // 这个特殊的 `require` 语法将会告诉 webpack")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     // 自动将你的构建代码切割成多个包，这些包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     // 会通过 Ajax 请求加载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     require(['./my-async-component'], resolve);")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// });")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//在工厂函数中返回一个 Promise")]),s._v("\nVue.component(\n "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-b"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这个 `import` 函数会返回一个 `Promise` 对象。")]),s._v("\n () => "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./my-async-component.js"')]),s._v(")\n);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#async-b-demos"')]),s._v("\n});\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#async-c-demos"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"async-c"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./my-async-component.js"')]),s._v(")\n }\n});\n")])]),t("p",[t("code",{pre:!0},[s._v("my-async-component.js")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" myComponent = {\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<h3>my-async-component</h3>"')]),s._v("\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" myComponent;\n")])])],2),t("hv-snippet",{attrs:{title:""}},[t("template",{slot:"title"},[t("p",[s._v("处理加载状态")])]),t("p",[s._v("异步组件工厂函数也可以返回一个如下格式的对象")]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"my-component-demos"')]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-javascript"},[s._v("javascript")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" LoadingComponent = {\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v("\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" ErrorComponent = {\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v("\n};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" AsyncComponent = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 需要加载的组件 (应该是一个 `Promise` 对象)")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./MyComponent.vue"')]),s._v("),\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 异步组件加载时使用的组件")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": LoadingComponent,\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 加载失败时使用的组件")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("error")]),s._v(": ErrorComponent,\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 展示加载时组件的延时时间。默认值是 200 (毫秒)")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("delay")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 如果提供了超时时间且组件加载也超时了，")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 则使用加载失败时使用的组件。默认值是：`Infinity`")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeout")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v("\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#my-component-demos"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n   "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"my-component"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" AsyncComponent\n }\n});\n")])]),t("p",[t("code",{pre:!0},[s._v("MyComponent.vue")])]),t("div",{staticClass:"hv-snippet--tag hv-snippet--tag-html"},[s._v("html")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hv-snippet"')]),s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hv-snippet--title"')]),s._v(">")]),s._v("我是MyComponent组件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h2")]),s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n data() {\n   "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"我是MyComponent组件"')]),s._v(" };\n },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<h3>我是MyComponent组件</h3>"')]),s._v("\n};\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])],2)],1)},n=[],p=t("2877"),e={},l=Object(p["a"])(e,r,n,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20f31b.d8a45b23.js.map