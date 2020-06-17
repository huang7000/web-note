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
