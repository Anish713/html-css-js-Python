// import userDetails from './2.js' ////module js //if type="module" is added in script tag in html file //for default export
// import { callback2, one, user } from './2.js' ////if type="module" is added in script tag in html file //for named export

// const {one,user}= require('./2.js') //common js ////if type="module" is not added in script tag in html file //destructuring
const props = require('./2.js') //common js ////if type="module" is not added in script tag in html file //without destructuring

//// if destructuring is done, then use one(), user, callback2()
// console.log(user);
// one()


////if destructuring is not done, then use props.one(), props.user, props.callback2()
// console.log(props);
// console.log(props.user);
// props.one()



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//         // continue;
//         // break;
//     }
//     else if (element == 7) {
//         console.log("7 is best number");
//     }
//     else {
//         console.log(element);
//     }
// }

// console.log(element); // ReferenceError: element is not defined




// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }



// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }




// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);



let otherArray = ['flash', "batman", "superman"]
// for(let element of otherArray){
//     console.log(element);
// }

// for(let index in otherArray){
//     console.log(index);
// }


////////////////////////////////////////foreach
//// for each loop: does not return anything, just iterate over the array and perform some action on each element without changing the original array.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// } )



////map
// map is used to transform the array elements and return a new array with the transformed elements. It does not change the original array.

// const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums2 = myNums2.map((num) => {
//     return num * 2
// })
// console.log(newNums2);






////filter
// const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums1 = myNums1.filter((num) => {
//     return num > 4
// })
// console.log(newNums1);



////filter, map
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums4 = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)
// console.log(newNums4);

////reduce
// const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums3 = myNums3.reduce((acc, num) => {
//     return acc + num
// }, 0)
// console.log(newNums3);


//////this keyword
const myObj = {
    name: "Anish",
    sex: 'Male',
    greet: function () {
        console.log(this); //this is pointing to myObj object in this case. 
        console.log(`Hello ${this.name}`);
    }
}
// myObj.greet() //Hello Anish

const greet2 = myObj.greet
// console.log(greet2); //greet2 is a reference to greet function.
// greet2() //undefined because this is pointing to global object window in browser and global object in nodejs environment.


// global.name = 'Anish'; // Global variable
// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// person.greet(); // Output: Hello, my name is John
// const greetFunc = person.greet;
// greetFunc(); // Output: Hello, my name is Anish (or 'global.name' in non-strict mode)







// //////this in arrow function vs normal function
//// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the this keyword always represents the object that defined the arrow function.
//eg
function exampleFunction() {
    console.log(this);
}
const obj = {
    method: exampleFunction
};
// obj.method(); // Output: { method: [Function: exampleFunction] }  
// exampleFunction(); // Output: global object in browser and undefined in nodejs environment.

const arrowFunction = () => {
    console.log(this);
};
// arrowFunction(); // Output: {} (empty object) 

const objjj = {
    method: function () {
        const arrowFunc = () => {
            console.log(this); // Output: { method: [Function: method] }, this is pointing to the object objjj. (If an arrow function is defined inside another function, it will capture the value of this from the outer function.)
        };
        arrowFunc();
    }
};
// objjj.method(); // Output: { method: [Function: method] } 
