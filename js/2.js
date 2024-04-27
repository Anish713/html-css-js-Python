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

// console.log(5+'5') //int + string = string (Concatenation)
// console.log(5+5) //int + int = int (Addition)
// console.log(typeof(5+2.0)) //int + float = float (Addition)

// console.log('5'*5) //string * int = int (Multiplication)

