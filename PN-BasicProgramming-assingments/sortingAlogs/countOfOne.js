/**
 * Implement a function that takes an sorted array of 1 and 0 as argument
 * and returns number of 1 in it.
 */

const arr = [0, 0, 1, 1, 1];
const countOFOne = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    }
    if (arr[i] > 1) {
      break;
    }
  }
  return count;
};

console.log(countOFOne(arr));
