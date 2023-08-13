// trim()
// toUpperCase
// toLowerCase
// slice


/* trim removes the spaces in string */

// let firstName = "    vaish   ";
// console.log(firstName.length); 
// firstName.trim(); //here existing string change won't change because string is immutable 
// console.log(firstName.length); // output will be 12 two times 



/* for removing the spaces you can write it as follows */

// let firstName = "    vaish    ";
// console.log(firstName.length); //13
// let newString = firstName.trim();
// console.log(newString.length);// after removing spaces op-5



/* UpperCase */

// let firstName = "vaish";
// console.log(firstName.toUpperCase());//output-VAISH
// firstName = firstName.toUpperCase();
// console.log(firstName);//VAISH

/* LowerCase */

// let firstName = "vaiSH"
// console.log(firstName.toLowerCase());//Vaish

/* slice */

let firstName ="vaish"
console.log(firstName.slice(0 ,4))//vais it will start from 0 end ends on 4 but it won't include 4(h) 

