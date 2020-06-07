class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person) {
    return "Hello！" + person.firstName +" "+person.lastName;
}
let user = new Student("7000","22","sss");
document.body.innerHTML = greeter(user);