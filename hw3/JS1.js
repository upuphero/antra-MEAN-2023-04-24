// ECMA: European Computer Manufacturers association
// caniuse.com
// Transpile
// interpreter
// Two environment: Node / browser
// console.log("hi from js")

// ---------- Primitive data types
// string, boolean, number, null, undefined, symbol, bigInt(2^53 - 1)
// null VS undefined
// console.log(typeof "")
// console.log(typeof null)
// console.log(typeof undefined);

// ---------- Reference data types / Object
// Stack: static / primitive --->
// Heap: objects / functions
// let arr = new Array();
// console.log(typeof arr);

// ---------- Pass by value
// let a = 8;
// let b = a;
// b = 10;
// console.log(a);

// ---------- Pass by reference
// let a = {name: 'Tom'};
// let b = a;
// b.name = 'Jerry';
// console.log(a);

// ---------- Mutable VS Immutable
// let a = 16;
// a = 12;
// console(a)

// ---------- Coercion
// Explicit (Type casting) VS Implicit ==, +
// ---- to string
// let res = 1 + "1";
// ---- to boolean
// let res = Boolean(null);
//  ||, &&, !
// ---- to number
// let res = Number("123");
// let res = Number("number");  NaN
// let b = "123";
// let a = +b;
// let res = a+b;
// res = a+ +b;

// let res = null + "5";
// let res = null + 5;
// let res = 12 / "2";
// let res = + "123";
// let res = true + false;
// let res = + "abc";
// console.log(typeof res, res);

// ---------- == VS ===
// console.log('1' === 1);
// console.log(undefined === null);
// const a = {
//     content: {
//         age: 17
//     }
// }
// const b = {
//     content: a.content
// }
// console.log(a.content == b.content)
// console.log(a == b)

// ---------- Truthy vs Falsy
// Falsy: null, undefined, 0, NaN, ""
// console.log(Boolean([]))
// console.log(Boolean({}))

// const arr =[1, 2, 3, 4];
// if (arr.length){
//     // do sth here
// }

// Object
// let obj = {
//     age: 16,
//     name: "Tom"
// }
// console.log(obj);
// let obj1 = Object.create({age: 16})
// let obj2 = new Object({})
// Access properties
// console.log(obj.age)
// console.log(obj["age"])
// let str = "name";
// console.log(obj[str])
// console.log(obj.str)
// Staic methods
// const obj = {
//     name: "Tom", age: 16, gender: "male"
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// Class
// class Person {
//     constructor(){
//         this.name = "Tom";
//         this.age = 16;
//     }
//     getAge(){
//         return this.age;
//     }
// }

// const student = new Person()
// console.log(student.getAge());

// Function
// function createPerson(){
//     const obj = {};
//     obj.name = "Tom";
//     obj.age = 16;

//     return obj;
// }
// console.log(createPerson());
// arrow function: (inputs) => { function body }
// const myFunc = (name, age) => {
//     console.log("name is " + name);
//     console.log("age is " + age);
// }
// myFunc("Tom", 16);

// Ways to declare variables
// let, const, var
// var: redeclared & reassigned, global / functional scope, hoisted
// let: reassigned, block scope
// const: block scope

// function foo(){
//     // console.log("before", a);
//     if (true){
//         let a = 5;
//         console.log(a)
//     }
//     // console.log("after", a);
// }
// foo();

// const obj = {name: "Tom"}
// obj.name = "Jerry";
// obj = {};
// console.log(obj)

// null, undefined, is not defined (reference error)
// var name = "Tom";
// var age = 16;
// const obj ={
//     name: 'Tom', age: 16
// }

// Function hoisting
// foo();
// function foo() {
//     console.log("foo");
// }
// foo();

// myFunc();
// const myFunc = () =>{
//     console.log("Arrow function")
// }