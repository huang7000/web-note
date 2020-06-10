// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     // ...
//     console.log(config)
// }

// //使用类型断言
// let mySquareOk = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// let squareOptions = { colour: "redok", width: 100 };
// let mySquareTrue = createSquare(squareOptions);

// error: 'colour' not expected in type 'SquareConfig'
//let mySquareError = createSquare({ colour: "rederror", width: 100 });
interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let search: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result == -1;
  };
  
  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  }
  let ss={source: "123", subString: "456"}
let res=search("123","456");
let result=mySearch("123","456");
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