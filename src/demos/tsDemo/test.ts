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

const enum Enum {
  A = 1,
  B = A * 2
} 

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
console.log(directions)
enum Enum2 {
  A
}
let a = Enum2.A;
let nameOfA = Enum2[a]; // "A"
console.log(nameOfA)
