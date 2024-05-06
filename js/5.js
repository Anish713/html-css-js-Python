// call, apply, bind

// call, apply, bind are used to change the value of this in a function
// call and apply are used to call the function immediately
// bind is used to create a new function with the value of this already set
// call and apply are similar, the only difference is the way we pass the arguments. In call, we pass the arguments separated by commas, while in apply, we pass the arguments in an array. 

function fullName(greeting, message) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + ' ' + message);
}

const person1 = {
    firstName: 'Anish',
    lastName: 'Shrestha'
};

const person2 = {
    firstName: 'Pragya',
    lastName: 'Shrestha'
};

// fullName.call(person1, 'Hello', 'How are you?'); // Hello Anish Shrestha How are you?
// fullName.apply(person2, ['Namaste', 'Kasto cha?']); // Namaste Pragya Shrestha Kasto cha?

const person3 = {
    firstName: 'Pratigya',
    lastName: 'Jupiter'
};

const person3FullName = fullName.bind(person3, 'Hola', 'Como estas?');
// person3FullName(); // Hola Pratigya Jupiter Como estas?




////currying
// Currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument.
// Currying is a process of breaking down a function into a series of functions that each take a single argument.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

function multiply(a, b, c) {
    return a * b * c;
}
function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c; //child function has access to parent function's variable but not vice versa.
        }
    }
}
// console.log(multiply(2, 3, 4)); // 24
// console.log(curriedMultiply(2)(3)(4)); // 24

class MyClass{}
// console.log(typeof curriedMultiply); // function, type of function is function because it returns a function
// console.log(typeof MyClass); // function, type of class is function because class is a special type of function in javascript
// console.log(typeof Promise); // function, type of Promise is function because Promise is a special type of function in javascript

// console.log(typeof [1, 2, 3]); // object, type of array is object because array is a special type of object in javascript
// console.log(typeof null); // object, type of null is object because of a bug in javascript
// console.log(typeof undefined); // undefined, type of undefined is undefined
// console.log(typeof NaN); // number, type of NaN is number because NaN is a numeric data type in javascript
// console.log(typeof Infinity); // number, type of Infinity is number because Infinity is a numeric data type in javascript



// a=[1,2,3]
// b=a //b is a reference to a
// c=a.slice() //slice is used to create a shallow copy of an array
// a.push(4)
// console.log(a);
// console.log(b);
// console.log(c);


////Q1. Create a promises which is resolved when we click on a button and rejected when we click on another button.
// const promise = new Promise((resolve, reject) => {
//     document.getElementById('btn1').addEventListener('click', resolve("Resolved button clicked"));
//     document.getElementById('btn2').addEventListener('click', reject("Rejected button clicked"));
// });
// promise.then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// });



//// Q2. Create a promise which resolves after 5 seconds and returns a message "Promise resolved" and rejects after 3 seconds and returns a message "Promise rejected". Also, add a finally block which logs a message "Promise settled".
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
//     setTimeout(() => {
//         reject("Promise rejected");
//     }, 3000);
// });
// promise.then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// }).finally(() => {
//     console.log("Promise settled");
// });


//// 
