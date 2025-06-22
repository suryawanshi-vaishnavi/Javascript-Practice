/* Print numbers from 1 to 10 */

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }
// console.log('loop done');

// print even number from 1 to 20 - use for or while lood

// let i = 1;

// while(i<=20){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

//Sum of First n Natural Numbers

// function findsum(n){
//     let sum =0;
//     for(let i = 0; i<=n; i++){
//         sum= sum+i;
//     }
//     console.log(sum);
// }
// findsum(10);

// final question - count digits

function countdigit(num){
    let count = 0;
    while(num > 0){
       num = Math.floor(num/10)
       count++; 
    }
    console.log(count)
}

countdigit(1000);
countdigit(1);

