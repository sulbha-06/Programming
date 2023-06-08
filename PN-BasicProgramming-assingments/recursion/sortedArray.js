/**
 * to check if array is sorted recursivvely
 */
const unSortedArr = [9, 5, 2, 4, 3, 2, 1];
const sortedArr = [1, 2, 5, 8, 9, 10, 11];

const ifSorted = (nums, currentIndex) => {
  if (currentIndex == nums.length - 1) {
    return true;
  }
  if (
    nums[currentIndex] < nums[currentIndex + 1] &&
    ifSorted(nums, currentIndex + 1, nums.length)
  ) {
    return true;
  }
  return false;
};

console.log(ifSorted(unSortedArr, 0));
console.log(ifSorted(sortedArr, 0));
