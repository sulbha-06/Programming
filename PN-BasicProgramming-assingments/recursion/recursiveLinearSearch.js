/**
 * Implement linear search with recursive approach
 */
/**
 * to check if array is sorted recursivvely
 */
const unSortedArr = [9, 5, 2];
const sortedArr = [1, 2, 5, 8, 9, 10, 11];
const key = 10;
const recursiveLinearsearch = (nums, key) => {
  if (nums.length == 0) {
    return false;
  }
  const [first, ...rest] = nums;
  if (first == key) {
    return true;
  } else {
    return recursiveLinearsearch(rest, key);
  }
};

console.log(
  `key ${key} is  ${
    recursiveLinearsearch(unSortedArr, key) ? "found" : "not found"
  } in array ${unSortedArr}`
);
console.log(
  `key ${key} is  ${
    recursiveLinearsearch(sortedArr, key) ? "found" : "not found"
  } in array ${unSortedArr}`
);
