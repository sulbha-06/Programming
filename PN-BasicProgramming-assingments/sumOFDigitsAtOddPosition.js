/*
Write a program that reads a positive integer N as an input and prints 
the sum of digits at odd position of the number.
input-548 output-13
*/

const a= 548;
const b = 45789;

const sumOfNumberAtOddPosition = (number)=>{
    let num = number
    let sum = 0;
    let count = 1;
    while(num != 0){
        if(count % 2 !== 0){
            sum = sum+ (num%10);
        }
         num = parseInt(num / 10);
        count++;
    }
    return sum;
}
console.log(sumOfNumberAtOddPosition(a));
console.log(sumOfNumberAtOddPosition(b));