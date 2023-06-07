/*
WAP that reads an input and checks whether the given number is an Armstrong number or not. 
If the number is an Armstrong number, print 1 otherwise print 0
Armstrong number is a number that is equal to the sum of cubes of its digits.
Sample Input
153
Sample Output
1
153 = (1*1*1)+(5*5*5)+(3*3*3)
*/

const a = 153;
const b = 154;
const isAmstrongNumber = (number) =>{
    let tempNumber = number;
    let sum = 0;

    while(tempNumber !=0){
        let remainder = tempNumber % 10;
        sum += remainder*remainder*remainder;
        tempNumber = parseInt(tempNumber/10);
    }
    if(sum === number){
        return 1;
    }
    return 0;
}
console.log(isAmstrongNumber(a));
console.log(isAmstrongNumber(b));