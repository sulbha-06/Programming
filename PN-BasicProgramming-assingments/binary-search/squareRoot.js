/**
 * Find square root of a number precision 3
 */
const key = 69;
const binarySearchSqareInteger = (key) => {
  let start = 0;
  let end = key;
  let ans = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (mid * mid === key) {
      return mid;
    } //mid is less than key so key could be on right
    if (mid * mid < key) {
      ans = mid;
      start = mid + 1;
    } else {
      ////mid is greater than key so key could be on right
      end = mid - 1;
    }
  }
  return ans;
};

const calculatePrecision = (square, precision, intNumber) => {
  let factor = 1;
  let ans = intNumber;
  for (let factors = 0; factors < precision; factors++) {
    factor = 1 / 10;
    for (let second = ans; second * second < square; second += factor) {
      ans = second;
    }
  }
  return ans.toPrecision(6);
};

const findSquareRoot = (squareNumber) => {
  let intPart = binarySearchSqareInteger(squareNumber);
  return calculatePrecision(squareNumber, 3, intPart);
};
console.log(findSquareRoot(key));
