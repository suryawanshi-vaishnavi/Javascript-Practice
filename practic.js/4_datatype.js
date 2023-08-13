/* datatype

  number
  string
  true/false
  boolean
  null
  undefined
  BigInt
  symbol
*/

let age = 22;
let firstName="vaish";

// console.log(typeof (age)); //output - number
// console.log(typeof (firstName)); //output - string



//convert number to string
//22 ="22"
age = age + "";
console.log(typeof (age));//string


//convert string to number
firstName = +"vaish";
console.log(typeof (firstName));