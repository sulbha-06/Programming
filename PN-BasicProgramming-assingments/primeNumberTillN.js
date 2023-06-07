/**
 * Given a positive integer N greater than 1, WAP that prints all the prime numbers from 2 to N.

A prime number is a natural number greater than 1, which is only divisible by 1 and itself.
Input:
5
Output:
2 3 5
 */

const Input = 5;
const primeNumberTillN = (number)=>{
    let prime = [];
    let i = 2;
    while(i <= number){
        if(number%i !== 0){
            prime.push(i);
        }
        i++
    }
    return prime;
}
console.log(primeNumberTillN(Input));