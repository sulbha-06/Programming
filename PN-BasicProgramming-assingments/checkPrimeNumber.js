/*
Write a program that reads a positive integer N as an input and prints 1 if it is prime number otherwise 0.
A prime number is a natural number greater than 1, which is only divisible by 1 and itself.

Sample Input
22

Sample Output
0
*/

const a = 29;
const isPrimeNumber = (number)=>{
    let count = 2;
if(number == 1)
return 1;
 if(number > 1){
    while(count< number){
        if(number % count == 0){
            return 0;
        }
        count++
    }
 }
 return 1;
}
console.log(isPrimeNumber(a));