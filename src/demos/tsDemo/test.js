"use strict";
// function identity(ary:any):any{
//   return ary;
// }
// console.log(identity(555))
// console.log(identity({name:"huang 700" ,age:18}))
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(directions);
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
})(Enum2 || (Enum2 = {}));
var a = Enum2.A;
var nameOfA = Enum2[a]; // "A"
console.log(nameOfA);
