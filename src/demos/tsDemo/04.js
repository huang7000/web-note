"use strict";
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
var search = function (source, subString) {
    var result = source.search(subString);
    return result == -1;
};
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var ss = { source: "123", subString: "456" };
var res = search("123", "456");
var result = mySearch("123", "456");
console.log(res);
console.log(result);
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }
// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
