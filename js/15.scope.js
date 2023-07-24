/*

if(true){
    const myName ='vaish'
}
 console.log(myName) //here it throws an error it says myName is not defined

 */

/*

if(true){
    const myName ='vaish'
    console.log(myName) //vaish
     //so let and const declared variables can only be accessed in the block they are declared in
}
*/





/* function scope -->  which dictates that  variables declared inside the function are not accessible from outside the function*/
/*

if(true){
    const myName ='vaish'
    console.log(myName)
}

function testFn()
{
    const myName ="surya"
    console.log(myName)
}

testFn()   op-->//vaish 
                // surya 
//(here isthat both myName variables have different scopenyname within if block is vaish whereas within test function is surya 
// even thogh they have the same variable name)

*/

/* global scope --> is the scope outside any block or  a function. a global scope variable is accessible both inside a block
 as well as a function 
 */

//  const myNum =100
//  if(true){
//     const myName ='vaish'
//     console.log(myName)
//     console.log(myNum)
// }

// function testFn()
// {
//     const myName ="surya"
//     console.log(myName)
//     console.log(myNum)
// }

// testFn() 


/*
op:
vaish
100
surya
100
*/


const myNum =100
const myName='batman'
if(true){
    const myName ='vaish'
    console.log(myName)
    console.log(myNum)
}

function testFn()
{
    const myName ="surya"
    console.log(myName)
    console.log(myNum)
}

testFn() 