/**WAP that reads a number N and prints Nth Fibonacci number.

The Fibonacci series is an infinite series, starting from 0 (0th term) and 1 (1st term),
in which every number in the series is the sum of two numbers preceding it in the series.
Sample Input
2
Sample Output
1
The series is 0 1 1
 */

const a = 1;
const b = 5;

const getFibonnaci = (number) => {
  if (number == 0 || number == 1) {
    return number;
  }

  let first = 0;
  let second = 1;
  let next = 0;
  for (let i = 2; i < number; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
};
console.log(getFibonnaci(a));
// console.log(getFibonnaci(b));
