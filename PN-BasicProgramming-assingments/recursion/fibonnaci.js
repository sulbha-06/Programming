/**
 * fibonacci series using recursion
 */
const n = 7;
const fibonnaci = (num) => {
  //base case
  if (num == 0 || num == 1) return num;
  //recursive calls
  return fibonnaci(num - 1) + fibonnaci(num - 2);
};
console.log(fibonnaci(n));
