/* when types are same then there is no confusion */
// const var1 = 'test'
// const var2 = 'test'
// console.log(var1 == var2) //true
// console.log(var1 === var2) //true 

// const var1 = 10
// const var2 = '10'

// console.log(var1 == var2) //true (here javascript coerces the value to the same type so string 10 is converted into numeric 10 automatically and then compared)
// //(but triple equals is more strict and ensures both constants must be of the same type and will not convert implicitly
// // since a number is different from a string type false is returned)
// console.log(var1 === var2) //false



/* here i have given all the faulty values and double euqals [==] will treat them as euqals  which is confusing 
and lead to incorrect results so although it  isn't wrong to use == 
but using === concept of equality for beginners it helps */

// const  var1 = 0
// const var2= ''
// console.log(var1 == var2) //true
// console.log(var1 === var2) //false

// const  var1 = false
// const  var2 = ''
// console.log(var1 == var2) //true
// console.log(var1 === var2) //false

// const  var1 = null
// const var2= undefined
// console.log(var1 == var2) //true
// console.log(var1 === var2) //false
  