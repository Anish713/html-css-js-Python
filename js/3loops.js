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

