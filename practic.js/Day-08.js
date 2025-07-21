// Write a function that prints all elements of an array in reverse order without using .reverse()

let arr = [5, 10, 15,20,25];

function printReverse(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse(arr);