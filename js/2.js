// 'use strict';

console.log(a); // undefined
var a = 10;


//This is single line comment in js

/*
This is 
    multi line 
        comment in js
*/

{
    let a = "I am a let inside block scope";
    // console.log(a); // I am inside block scope

    var b = "I am a var inside scope";
    // console.log(b); 

    const c = "I am a const inside scope."
    // console.log(c);
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // I am a var inside scope
// console.log(c); // ReferenceError: c is not defined


function add1(x, y) {
    return x + y;
}
// console.log(add1(2,3)); // 5

test1 = function add1(x, y) { //can store function in variable
    return x + y;
}
// console.log(test1(2,3)); // 5

test2 = add1; //can store function in variable
// console.log(test2(2,3)); // 5


let add2 = (x, y) => x + y; //no need of keyword return for same line without any brackets.

// console.log(add1(2,3)); // 5
// console.log(add2(2,3)); // 5

let add3 = (x, y) => { return x + y; }; //need of keyword return for both same and multiple lines with curly brackets.
// console.log(add3(2,3)); // 5

let add4 = (x, y) => ( //no need of return keyword in arrow function with small brackets.
    x + y
)
// console.log(add4(2,3)); // 5

function scope1() {
    let z = "I am inside function scope";
    // console.log(z); // I am inside function scope
}
scope1();
// console.log(z); // ReferenceError: a is not defined

// console.log(5=='5') // true (Equality Operator)
// console.log(5==='5') // false (Strict Equality Operator)


// console.log(typeof undefined) // undefined
// console.log(typeof null) // object //typeof null is object in js. 
// console.log(typeof {}) // object

// console.log(null==undefined) // true
// console.log(null===undefined) // false
// console.log(False==0 & True==1) // true
// console.log(False===0 & True===1) // false

// console.log(5+'5') //int + string = string (Concatenation)
// console.log(5+5) //int + int = int (Addition)
// console.log(typeof(5+2.0)) //int + float = float (Addition)
// console.log('5'*5) //string * int = int (Multiplication)
// console.log(+true); // true is 1
// console.log(+""); // empty string is 0




////HOISTING : using variable before declared. var are hoisted to the top of the function and let are not hoisted.
carName1 = "Volvo";
// console.log(carName1); // Volvo
var carName1;

// carName2 = "Saab";
// let carName2 = "Volvo";
// console.log(carName2); // ReferenceError: carName2 is not defined

// console.log(carName3); // undefined
// var carName3 = "Volvo"; ////check figure drawio, consiststwo phases: memory phase, code phase.
// console.log(carName3); // Volvo



////STRING IN JS : can be written with single or double quotes.
const username = "Anish713"
const repoCount = 5

// console.log(username + repoCount + " Value");

// console.log(`Hello my name is ${username} and my repo count is ${repoCount}.`);


const anotherUser = new String('Pragya-02') //String Object (String is a constructor function in js) 

// console.log(anotherUser[0]);
// console.log(anotherUser.__proto__);




////ARRAYS IN JS : can store multiple values in a single variable. 
const myHeros = ["shaktiman", "naagraj"]
const testArr = new Array(1, 2, 3, 4)
// console.log(testArr);

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// // console.log(myArr);


//// slice, splice
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice does not change the original array. includes start index and end index. end index is not included.

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //splice changes the original array. includes start index and number of elements to be removed.
// console.log("C ", myArr);
// console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allHeros = [...marvel_heros, ...dc_heros] //spread operator ...
// console.log(allHeros);


///////OBJECTS IN JS : can store multiple values in a single variable.
const user = {
    username: "Anish713",
    email: "anish@example.com",
    loginCount: 5,
    isLoggedIn: true,
    test: {
        a: 1,
        b: 2
    },
    lastLoginDays: ["Monday", "Saturday"],
    logins: function () {
        return "User logged in"
    }
}

// console.log(user.logins())

// console.log(user.username);
user["username"] = 'pragya-02'
// console.log(user.username);

// console.log(user["email"]);
user.email = "shresthapragya961@gmail.com"
// console.log(user["email"]);

// console.log(user)
user.newValue = "new value";
user.newlogins = function () {
    return "new log in"
};
// console.log(user)



allUsers = ['Anish', 'Mars', 'Pratigya', 'Jupiter', 5]
// console.log(allUsers);
copyUsers = allUsers
// console.log(copyUsers);
copyUsers[0] = 'Pragya'
// console.log(allUsers);
// console.log(copyUsers); //both will be changed as both are pointing to same memory location.

copyUsers = [...allUsers] //spread operator
// copyUsers = allUsers.copy() ////copy method //same as above //different memory location
copyUsers[0] = 'Panda' //only copyUsers will be changed. 
// console.log(allUsers);
// console.log(copyUsers);


////function scope
////// CLOSURES : function inside a function that has access to the outer function's variables.
function one() {
    const username = "Mars"
    const email = "mars@mars.com"

    function two() {
        const website = "github.com"
        console.log(username); // outer scope variable can be accessed in inner scope.
        console.log(website); // inner scope variable can be accessed in inner scope.
    }
    // console.log(website); //ReferenceError: website is not defined. inner scope variable cannot be accessed in outer scope.

    two()
    console.log(email);

}

// one()



////// Immediately Invoked Function Expressions (IIFE) : function that runs as soon as it is defined.
// (function testdb(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('Anish')



////// CALLBACKS : function passed as an argument to another function.
function callback1(name) {
    console.log(`Hello ${name}`);
}

function callback2(name, callback) {
    callback(name)
}

// callback2('Anish', callback1)

// export default user //ES6 syntax //exporting default object to be used in other files. //can be used only once in a file. //can export function, variable, object, etc.
// export { add1, add2, add3, add4, scope1, callback1, callback2, one } //ES6 syntax, module js //exporting functions to be used in other files. //imported in 3loops.js
// module.exports = { callback2, one, user } //CommonJS syntax //exporting functions to be used in other files. //imported in 3loops.js

props = { one, user, callback2 }

// exports default props //module js syntax //exported without destructuring //exporting functions to be used in other files. //imported in 3loops.js
module.exports = props //CommonJS syntax //exported without destructuring //exporting functions to be used in other files. //imported in 3loops.js
