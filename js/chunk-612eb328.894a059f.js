(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-612eb328"],{3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"3e8f":function(t,n){},"5df3":function(t,n,e){"use strict";var i=e("02f4")(!0);e("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=i(n,e),this._i+=t.length,{value:t,done:!1})}))},"6b54":function(t,n,e){"use strict";e("3846");var i=e("cb7c"),o=e("0bfb"),r=e("9e1e"),c="toString",u=/./[c],a=function(t){e("2aba")(RegExp.prototype,c,t,!0)};e("79e5")((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?o.call(t):void 0)})):u.name!=c&&a((function(){return u.call(this)}))},c276:function(t,n,e){"use strict";e.r(n);e("6b54"),e("ac6a"),e("5df3");var i=e("3e8f");function o(t){return new Promise((function(n){var e=i.createReadStream(t);e.setEncoding("UTF8"),e.on("data",(function(t){return n(t)}))}))}Promise.all([o("input.txt"),o("output.txt")]).then((function(t){var n=i.createWriteStream("output.txt");n.write(t[0]+","+t[1],"UTF8"),n.end(),i.readFile("output.txt",(function(t,n){return console.log(n.toString())}))}))}}]);
//# sourceMappingURL=chunk-612eb328.894a059f.js.map