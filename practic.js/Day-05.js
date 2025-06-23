// let num = [5, 10, 15, 20]

// function numarray(num){
//     for(let i = 0; i < num.length; i++){
//         console.log(num[i]);
//     }
// }
// numarray(num);


//Question 2: Find the sum of all elements in the array -  [1, 2, 3, 4, 5]

// let num = [1, 2, 3, 4, 5]

// function sumofelement(num){
//     let sum = 0
//     for(let i = 0; i < num.length; i++){
//        sum = sum + num[i];
//     }
//     console.log(sum);
// }
// sumofelement(num);


//Question 3: Count how many even numbers are in the array  - [1, 2, 3, 4, 5, 6]

let num = [1, 2, 3, 4, 5, 6];

function evennumber(num){
    let count = 0;
    for( let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
             count++;
        }
    }
    console.log(count);
}
 evennumber(num);