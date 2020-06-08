"use strict";
var _a, _b;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
var userName = "huang 7000";
//模版字符串
var sentence = "Hello, my name is " + userName + ".";
console.log(userName);
console.log(sentence);
var numberList = [1, 2, 3];
var numList = [1, 2, 3];
var readolyArray = [1, 2, 3, 4];
console.log(numberList);
console.log(numList);
console.log(readolyArray);
var objectlist = ["hello", 10]; //元组 Tuple
console.log(objectlist[0]); // hello
// objectlist[2]=333 //333
// objectlist[2]="hi" //hi
//objectlist[3]= true; // Error, 布尔不是(string | number)类型
//console.log(objectlist[2]);
var tupleList = ["hello", 10, true]; //元组 Tuple
console.log(tupleList[2]);
var _c = [1, 2], first = _c[0], second = _c[1]; //first 1,second 2
console.log(first);
console.log(second);
_a = [second, first], first = _a[0], second = _a[1]; //first 2,second 1
console.log(first);
console.log(second);
var o = {
    a: "foo",
    b: 12,
    c: "bar",
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
(_b = { a: "baz", b: 101 }, a = _b.a, b = _b.b);
console.log(a);
console.log(b);
var newName1 = o.a, newName2 = o.b; //等同 let newName1 = o.a; let newName2 = o.b;
console.log(newName1);
console.log(newName2);
{
    console.log("指示类型");
    var a_1 = o.a, b_1 = o.b;
    console.log(a_1);
    console.log(b_1);
}
