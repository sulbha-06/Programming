/*
Write a program that reads a number N, prints the numbers from 1 to N and for 
multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”.
Sample Input
5

Sample Output
1 2 Fizz 4 Buzz
 */

const a = 5;
const b = 15;
const buzzFizz =(number)=>{
    let count = 1;
    while(count <= number){
        if(count % 3 === 0){
            console.log("Buzz");
        }else
        if(count % 5 === 0){
            console.log("Fizz");
        }else{
            console.log(count);
        }
        count++;   
    }
}
// buzzFizz(a);
buzzFizz(b);