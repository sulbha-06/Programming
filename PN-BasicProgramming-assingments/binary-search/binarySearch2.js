const arr = [4, 5, 7, 9, 10];
const key = 8;
const binarySearch = (arr, starts, ends, key) => {
  console.log(starts, ends, key);
  let start = starts;
  let end = ends;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    console.log(start, end, mid);
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
console.log(binarySearch(arr, 0, 5, key));
