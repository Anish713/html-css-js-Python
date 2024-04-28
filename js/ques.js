////Output of the following code???
////check js.drawio
// var variable = 10;

// (() => {
//     console.log(variable);
//     variable = 20;
//     console.log(variable);
// })();
// console.log(variable);
// var variable = 30;






//////why we need arrow function in javascript when we have normal function?
//Arrow functions are more concise than traditional function expressions and function declarations.
//Arrow functions do not have their own this.
//"this" is bound to the enclosing scope at the time the Arrow function is defined.

const TestObject = {
    name: 'Anish',
    show: function () {
        console.log(this); // "this" inside object refers to object itself
        console.log(this.name); // Anish
    }
}
// TestObject.show(); // {name: "Anish", show: ƒ}


function TestFunction() {
    let name = 'Anish';
    console.log(this); // "this" inside function refers to window object, not the function itself. 
    console.log(this.name); // undefined
    console.log(name); // Anish
}
TestFunction(); //undefined 



const x = {
    name: 'abc',
    salary: 50000,
    showNormalFunction: function () { // with normal function
        console.log(this) // refers to x object
        console.log(`Hi, I am ${this.name} and my salary is ${this.salary}.`);
    },
    showArrowFunction1: () => { // with arrow function
        console.log(this) // refers to window object
        console.log(`Hi, I am ${this.name} and my salary is ${this.salary}.`); // undefined
    },
    showArrowFunction2: function () { // with arrow function
        (() => {
            console.log(this) // refers to x object
            console.log(`Hi, I am ${this.name} and my salary is ${this.salary}.`);
        })();
    },
    funInfun: function () {
        // that = this;
        function fun() {
            console.log(this) // refers to window object
            console.log(`Hi, I am ${this.name} and my salary is ${this.salary}.`)
            // console.log(that); // refers to x object
            // console.log(`Hi, I am ${that.name} and my salary is ${that.salary}.`)
        }
        fun();
    },

}
// x.showNormalFunction(); // Hi, I am abc and my salary is 50000.
// x.showArrowFunction1(); // undefined
// x.showArrowFunction2(); // Hi, I am abc and my salary is 50000.
x.funInfun(); // window object
