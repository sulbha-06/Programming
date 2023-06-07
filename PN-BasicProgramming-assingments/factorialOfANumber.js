/*
WAP that reads a non-negative integer N as input and prints the factorial of n.

Sample Input : 5
5

Sample Output : 
120
*/

const a = 5;
const b = 6;

const finndFactorial =(number) =>{
    let factorial = 1;
    while(number>0){
        factorial = factorial * (number);
        number--;
    }
   return factorial
}

console.log(finndFactorial(a));
console.log(finndFactorial(b));