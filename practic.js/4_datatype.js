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



/*

let age = 22;
let firstName="vaish";

console.log(typeof (age)); //output - number
console.log(typeof (firstName)); //output - string



//convert number to string
//22 ="22"
age = age + "";
console.log(typeof (age));//output - string


//convert string to number
firstName = +"vaish"; // just writing the + symbol before the string it will convert to number
console.log(typeof (firstName));//output - number


//we can do it in another form also

age = String(age); // i wrote S in small letter it was giving error like string is not defined
console.log(typeof age); //String

firstName = Number("vaish");
firstName = Number(firstName);
console.log(typeof firstName);//number both types gave same output

*/


/* string concatenation(adding) */

/*

let string1 ="vaish";
let string2 ="surya";

let string3 = string1+ string2;
console.log(string3); // output-vaishsurya but i want space in between so i can write it with " "

let string4 = string1+" "+ string2;
console.log(string4); // vaish surya 

*/


/*

let string1 ="10";
let string2="27";
let string3=string1+string2;
console.log(string3); //output-1027  if i want to do additin of it then i need to convert it into number by using + 
console.log(typeof (string3));//output - string 

*/

/*

let string1="10";
let string2="27";
let string3= + string1+ +string2;
console.log(string3); //output-37  
console.log(typeof(string3)) // number

*/


/* template string */


/*
let age =22;
let firstName ="vaish";
// let aboutme="my name is" + firstName + "my age is" + age;// output-my name isvaishmy age is22
// let aboutme="my name is " + firstName + " my age is " + age;//output- my name is vaish my age is 22
// let aboutme= `my name is ${firstName} my age is ${age}`;//output- my name is vaish my age is 22 (backticks gives the type of string)
let aboutme= "my name is  ${firstName}   my age is   ${age}";//output-my name is  ${firstName}   my age is   ${age} 
console.log(aboutme);

*/


/*  undefined */

/*

// let string1;
var string1;
// const string;//  gives error Missing initializer in const declaration

console.log( typeof string1) // output-undefined 
*/


/* null */
// let string1=null;
// console.log(typeof string1);//output-object type is showing object where it has to show that type is null. this Bug,error in javascript , then still why they r not working on this bug if they do we have to change whole code


/* BigInt */

// let num = 123;// you can aske here ky iss number ki koi limit hai ji ha javscript mai iski limit hai in JS kuch limit tak hi num store kr sakte hai
// // console.log(num);
// console.log(Number.MAX_SAFE_INTEGER)//output-9007199254740991(itna bada integer we can store in JS) MAX_SAFE_INTEGER will show kitns bada integer store kr sakte hai 
// agar aapko lg raha hai aapke code mai isse bada integer ho sakata hai then we use BigInt



// let myNum=BigInt(12345678987654332110);
// console.log(myNum);//output-12345678987654332416n(n is BigInt) we can use Bigint for small value also BigInt(12)

// there  are two types to write Bigint 1.Bignt(123) 2.123n

// let myNum=BigInt(12);
// let Num=12n;
// console.log(myNum +Num);//output-24n

//We can not add bigint with another datatypes

let myNum=BigInt(12);
let Num=12;
console.log(myNum +Num);//output-mix BigInt and other types, use explicit conversions Bigint ke sath bigint hi