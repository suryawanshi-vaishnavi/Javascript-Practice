//Write a function that takes two numbers as input and returns the greater number.

/* IF-else*/
// function greaterNumber(a , b){
//     if(a > b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// greaterNumber(10, 5);

/* Ternary Oprator */

// function greaterNumber(a, b){
//     return a > b ? a : b;
// }

// console.log(greaterNumber(10, 5));

/* 2nd question- Write a function that checks if a number is: "positive", "negative", or "zero" */

// function checksign(num){
//     if(num > 0){
//         console.log("Positive");
//     }
//     else if(num < 0){
//         console.log("Negative");
//     }
//     else{
//         console.log("Zero")
//     }
// }
// checksign(-10);

/* 3rd question- Write a function that takes a number as input and checks if the number is divisible by both 5 and 11. */

function checkdivisiblity(num){
    if(num % 5 === 0 && num % 11=== 0){
        console.log("Divisible by both")
    }
    else{
        console.log("Not divisible by both");
    }
}

checkdivisiblity(55);
checkdivisiblity(10);
checkdivisiblity(22);