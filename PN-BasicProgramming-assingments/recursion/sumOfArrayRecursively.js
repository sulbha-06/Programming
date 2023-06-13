/**
 * to check if array is sorted recursivvely
 */
const unSortedArr = [9, 5, 2];
const sortedArr = [1, 2, 5, 8, 9, 10, 11];

const sumOFArray = (nums) => {
  let sum = 0;
  if (nums.length == 0) return 0;

  const [first, ...rest] = nums;
  sum = first + sumOFArray(rest);

  return sum;
};

console.log(`Sum of array ${unSortedArr} is ${sumOFArray(unSortedArr)}`);
console.log(`Sum of array ${sortedArr} is ${sumOFArray(sortedArr)}`);
