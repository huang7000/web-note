"use strict";
// function identity(ary:any):any{
//   return ary;
// }
// console.log(identity(555))
// console.log(identity({name:"huang 700" ,age:18}))
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
