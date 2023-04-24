
/*class Solution{
    factorial(n){
        if(n===0){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
         const n=5;
 const result=factorial(n);
 console.log(' The factorial of ${n} is: ${result}');
    }
}*/
class Solution {
  factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  calculateFactorial() {
    const n = 5;
    const result = this.factorial(n); 
    console.log(` ${result}`); 
  }
}
