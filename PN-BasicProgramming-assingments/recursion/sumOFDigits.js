/**
 * Sum of digits
Implement a function that takes an integer n as an argument and returns the sum of its digit.
Sample Input
12
555
Sample Output
3
15
 */

const digit = 555;
const sumOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    sum = sum + parseInt(num % 10);
    sumOfDigits(parseInt(num / 10));
  }
  return sum;
};
console.log(sumOfDigits(digit));
