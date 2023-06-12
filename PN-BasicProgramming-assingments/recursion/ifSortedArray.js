/**
 * find if the given array is sorted or not recursively
 */
const arrSorted = [2, 6, 7, 9, 10, 12];
const arrUnSorted = [9, 5, 3, 6, 7];

const ifSortedArray = (arr, currentIndex) => {
  //if the current element is last /only element in array then it is sorted
  if (currentIndex == arr.length - 1) {
    return true;
  }
  //if the current element is greater than next element in array then it is not sorted
  if (arr[currentIndex] > arr[currentIndex + 1]) {
    return false;
  } else {
    return ifSortedArray(arr, currentIndex + 1); //cleck for rest array elements
  }
};
console.log(
  ` The given array ${arrSorted} is ${
    ifSortedArray(arrSorted, 0) ? "sorted" : "not sorted"
  }`
);
console.log(
  ` The given array ${arrUnSorted} is ${
    ifSortedArray(arrUnSorted, 0) ? "sorted" : "not sorted"
  }`
);
