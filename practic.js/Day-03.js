/* Write a function that accepts marks (0 to 100) and prints the grade: */

// function printmarks(mark){
//     if(mark >=  90 && mark <= 100){
//         console.log('A');
//     }
//     else if (mark >= 80 && mark <= 89){
//         console.log('B');
//     }
//     else if(mark >= 70 && mark <= 79){
//         console.log('C')
//     }
//     else if(mark >= 60 && mark <=69){
//         console.log('D')
//     }
//     else if(mark < 60){
//         console.log('F')
//     }
//     else{
//         console.log('Invalid Marks')
//     }
// }

// printmarks(92);
// printmarks(75);
// printmarks(59);



/*  Number is Positive & Even or Odd */

function checknumber(num){
    if(num > 0 && num % 2 == 0){
        console.log('positive and even');
    }
    else if( num > 0 && num % 2 !== 0){
        console.log('positive and odd');
    }
    else if ( num < 0){
        console.log('Negative')
    }
    else{
        console.log('Zero');
    }
}

checknumber(10);
checknumber(15);
checknumber(0);