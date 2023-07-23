// const a='4';
// const b=4;

// console.log(Boolean(""));
// console.log(Boolean(b));
// const c=Number(a);
// const d=Number(b);
// console.log(typeof a); //string
// console.log(typeof b); //number
// console.log(typeof c); //number 
// console.log(typeof d); //number


//console.log('2' + '3')//23
//console.log(2 + '3') //23 (if we try to add with a numeric string type the result is a string after the concatenation)
//console.log(true + '3') //true3 (concatenaton of two operands)

/*(other than + if you use a numeric string with - * / then the numeric string is automatically converted into a number)*/
// console.log('4' - '2') //2
// console.log('vaish'-'surya') //NaN (not a number)
// console.log('5' - true) //4
// console.log('5' - false) //5
// console.log('5' - null) //5
// console.log(5 + undefined) //NaN


/* explicit typeconversion */

// console.log(Number('5')) // 5
// console.log(Number(false)) //0
// console.log(Number(true)) //1
// console.log(Number(' '))  //0
// console.log(Number(null)) //0
//console.log(parseInt('5')) //5
//console.log(parseFloat('3.14')) //31.4(writing F small[f] gave error)

/* we have string global method to convert other datatype to string */
// console.log(String(500))//500
// console.log(String(true))//true
// console.log(String(null))//null
// console.log(String(undefined))//undefined

/*for an alternative you can use toString() method */
//console.log((500).toString())//500 but toString will not work on null and undefined


/* convert other datatypr to boolean you can use global boolean mrthod */
console.log(Boolean(500))//true (null , undefined , 0 , '' , NaN all returns false when converted to boolean)
console.log(Boolean(null))//false
console.log(Boolean(undefined)) //false
console.log(Boolean(0)) //false
console.log(Boolean('')) //false