/**
 * find factorial of given number by recursion
 */
const n = 6;
const factorial = (num) => {
  let ans = 1;
  if (num === 0) {
    return 1;
  }
  ans = num * factorial(num - 1);
  return ans;
};
console.log(factorial(n));
