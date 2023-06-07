/**
 * Given a sorted array nums, possibly with duplicates, 
 * find the number of occurrences of the target element.
 * Input: nums = {4, 4, 8, 8, 8, 15, 16, 23, 23, 42}, target = 8
Output: 3
 */
const arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42];
const target = 8;
const totalNoOfOccurance = (arr, target) => {
  const result = { firstIndex: 0, lastIndex: 0 };
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == target && arr[index] !== arr[index - 1]) {
      result.firstIndex = index;
    }
    if (arr[index] > target && arr[index - 1] == target) {
      result.lastIndex = index;
    }
  }
  return result.lastIndex - result.firstIndex;
};
console.log(totalNoOfOccurance(arr, target));
