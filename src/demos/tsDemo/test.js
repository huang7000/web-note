"use strict";
// function identity(ary:any):any{
//   return ary;
// }
// console.log(identity(555))
// console.log(identity({name:"huang 700" ,age:18}))
// function identitype<T>(ary:T):T{
//   return ary;
// }
// //传入所有的参数，包含类型参数
// let outputT = identitype<string>("myString");
// //利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
// let output = identitype("myString");
// console.log(identitype({name:"huang 700" ,age:18,sex:"男"}))
// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: <T>(arg: T) => T = identity;
// let yourIdentity: <U>(arg: U) => U = identity;
// let myIdentity2: {<T>(arg: T): T} = identity;
// enum Color {
//   red, blue
// }
// enum Color2 {
//   red, blue
// }
// enum E {
//   mm,
//   A = mm+B,  B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }
// enum E {
//   Foo,
//   Bar,
// }
// function f(x: E) {
//   if (x !== E.Foo) {
//       //             ~~~~~~~~~~~
//       // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//   }
// }
// const enum Enum {
//   A = 1,
//   B = A * 2
// }
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// console.log(directions)
// enum Enum2 {
//   A
// }
// let a = Enum2.A;
// let nameOfA = Enum2[a]; // "A"
// console.log(nameOfA)
// let x = 3;
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// let strLength2: number = (someValue as string).length;
// let y = [0, 1, null];
// console.log("y的数据类型")
// console.log(typeof y)
// let x:number|string = 1;
// console.log("x的数据类型")
// console.log(typeof x)
// class Animal{}
// class Rhino{}
// class Elephant{}
// class Snake{}
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
// let zoo2 = [new Rhino(), new Elephant(), new Snake()];
// console.log(typeof zoo)
// console.log(typeof zoo2)
// // window.onmousedown = function(mouseEvent) {
// //   console.log(mouseEvent.button);  //<- Error
// // };
// window.onmousedown = function(mouseEvent: any) {
//   console.log(mouseEvent.button);  //<- Now, no error is given
// };
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//     /* ... Invoke callback with 'args' ... */
// }
// // Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
// class Animal {
//   feet: number=5;
//   constructor(name: string, numFeet: number) { }
// }
// class Size {
//   feet: number=6;
//   constructor(numFeet: number) { }
// }
// let a: Animal=new Animal("123",456);
// let s: Size=new Size(123);;
// a = s;  // OK
// s = a;  // OK
// interface Empty<T> {
// }
// let x: Empty<number>=123;
// let y: Empty<string>="abc";
// console.log(x)
// console.log(y)
// x = y;  // OK, because y matches structure of x
// console.log(x)
// console.log(y)
// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }
// class Person {
//     constructor(public name: string) { }
// }
// interface Loggable {
//     log(): void;
// }
// class ConsoleLogger implements Loggable {
//     constructor(public id: Number) { }
//     log() {
//         console.log(this.id)
//         // ...
//     }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger(123));
// var n = jim.name;
// jim.log();
// console.log(jim)
// let index:Number|string;
// index="hello"
// index=123
// index=[] //error
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     }
//     else {
//         return n();
//     }
// }
// type Container<T> = { value: T };
// //类型别名不能出现在声明右侧的任何地方。
// type Names = Array<Names>; // error
// let s1 = Symbol('foo');
// Symbol.keyFor(s1) // undefined
// let s2 = Symbol('foo');
// console.log(s1 === s2)
// //注意，Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。
// let sfor1 = Symbol.for('foo');
// Symbol.keyFor(sfor1) // "foo"
// let sfor2 = Symbol.for('foo');
// console.log(sfor1 === sfor2)
// let numbers = [1, 2, 3];
// for (let num of numbers) {
//     console.log(num);
// }
// let arr1 = ["c", "d"];
// ["a", "b"].concat(arr1, "e"); // ['a', 'b', 'c', 'd', 'e']
// console.log(arr1[Symbol.isConcatSpreadable]); // undefined
// let arr2 = ["c", "d"];
// arr2[Symbol.isConcatSpreadable] = false;
// ["a", "b"].concat(arr2, "e"); // ['a', 'b', ['c','d'], 'e']
// let obj = { length: 2, 0: "c", 1: "d" };
// ["a", "b"].concat(obj, "e"); // ['a', 'b', obj, 'e']
// console.log(["a", "b"].concat(obj, "e") )
// console.log(obj[Symbol.isConcatSpreadable]); // undefined
// obj[Symbol.isConcatSpreadable] = true;
// ["a", "b"].concat(obj, "e"); // ['a', 'b', 'c', 'd', 'e']
// console.log(["a", "b"].concat(obj, "e") )
/** @type {number} */
var x;
x = 0; // OK
console.log(x);
x = false; // Error: boolean is not assignable to number
console.log(x);
x = !x;
console.log(x);
