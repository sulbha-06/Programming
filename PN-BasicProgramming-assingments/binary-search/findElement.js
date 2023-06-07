/**Find the element in the array.
Implement a function that takes sorted array and an element as arguments and return 1
 if element is present in the array otherwise 0 .
**/
const arr = [1, 1, 2, 3, 4, 5];
const key = 4;
const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === key) {
      return arr[mid];
    } //mid is less than key so key could be on right
    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      ////mid is greater than key so key could be on right
      end = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch(arr, key));
