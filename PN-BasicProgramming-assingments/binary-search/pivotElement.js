//find the pivot element in a rotated array
const arr = [5, 6, 7, 9, 10, 0, 2];
const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
console.log(
  `peak elemet index is ---> ${findPivot(arr)},element is ${
    arr[findPivot(arr)]
  }`
);
