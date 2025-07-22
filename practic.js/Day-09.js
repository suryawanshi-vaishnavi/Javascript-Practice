//Write a function that takes a number and prints Even or odd

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenorodd(arr){
    for( let i = 0; i < arr.length; i++){
         if(arr[i] % 2 == 0){
        console.log(arr[i] + ' is Even');
    }
    else{
        console.log(arr[i] + ' is Odd');
    }
    }
}

evenorodd(arr);