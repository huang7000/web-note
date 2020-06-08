let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
let userName: string = `huang 7000`;
//模版字符串
let sentence: string = `Hello, my name is ${userName}.`

console.log(userName);
console.log(sentence);

let numberList: number[] = [1, 2, 3];
let numList: Array<number> = [1, 2, 3];

let readolyArray: ReadonlyArray<number> = [1, 2, 3, 4];
console.log(numberList);
console.log(numList);

console.log(readolyArray);

let objectlist: [string, number] = ["hello", 10];//元组 Tuple
console.log(objectlist[0]); // hello
// objectlist[2]=333 //333
// objectlist[2]="hi" //hi
//objectlist[3]= true; // Error, 布尔不是(string | number)类型
//console.log(objectlist[2]);
let tupleList: [string, number, boolean] = ["hello", 10, true];//元组 Tuple
console.log(tupleList[2]);

let [first, second] = [1, 2];//first 1,second 2
console.log(first);
console.log(second);
[first, second] = [second, first]; //first 2,second 1
console.log(first);
console.log(second);
let o = {
    a: "foo",
    b: 12,
    c: "bar",
};
let { a, b } = o;
console.log(a);
console.log(b);
({ a, b } = { a: "baz", b: 101 });
console.log(a);
console.log(b);
let { a: newName1, b: newName2 } = o;//等同 let newName1 = o.a; let newName2 = o.b;
console.log(newName1);
console.log(newName2);
{
    console.log("指示类型");

    let {a, b}: {a: string, b: number} = o;
    console.log(a);
    console.log(b);
}