function findMaxSubarraySum(array) {
  if (array.length === 0) {
    return 0;
  }

  let currentSum = array[0];
  let maxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    // Choose either the current element or extend the existing subarray
    currentSum = Math.max(array[i], currentSum + array[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array1 = [-1, -2, -3];
console.log(findMaxSubarraySum(array1)); // Output: -1

const array2 = [1, -10, 2, 4, -5, 5];
console.log(findMaxSubarraySum(array2)); // Output: 6
