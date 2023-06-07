//find the peak in an array
const arr = [1, 5, 6, 7, 9, 10, 5, 4, 3];
const findPeak = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
console.log(
  `peak elemet index is ---> ${findPeak(arr)},element is ${arr[findPeak(arr)]}`
);
