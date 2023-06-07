/**
 * Given an array nums sorted in ascending order with possibly duplicate elements,
 *  the task is to print indexes of the first and last occurrences of an element target in
 *  the given array.
 *  Do not print a newline character.
 * Input: nums = {1, 3, 5, 5, 5, 5, 67, 123, 125}, target = 5
    Output: 2 5
 */
const arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
const target = 5;
const firstAndLastOccurance = (arr, target) => {
  const result = { firstIndex: 0, lastIndex: 0 };
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == target && arr[index] !== arr[index - 1]) {
      result.firstIndex = index;
    }
    if (arr[index] > target && arr[index - 1] == target) {
      result.lastIndex = index;
    }
  }
  return result;
};
console.log(firstAndLastOccurance(arr, target));
