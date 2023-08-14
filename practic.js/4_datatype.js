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
// //22 ="22"
// age = age + "";
// console.log(typeof (age));//output - string


// //convert string to number
// firstName = +"vaish"; // just writing the + symbol before the string it will convert to number
// console.log(typeof (firstName));//output - number


// we can do it in another form also

// age = String(age); // i wrote S in small letter it was giving error like string is not defined
// console.log(typeof age); //String

// firstName = Number("vaish");
// firstName = Number(firstName);
// console.log(typeof firstName);//number both types gave same output


/* string concatenation(adding) */
let string1 ="vaish";
let string2 ="surya";

let string3 = string1+ string2;
console.log(string3);

