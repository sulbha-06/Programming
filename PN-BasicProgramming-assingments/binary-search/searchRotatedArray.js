//find the an element in a rotated array
const arr = [5, 6, 7, 9, 10, 0, 2];
const key = 2;

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

const binarySearch = (arr, start, end, key) => {
  console.log(start, end, key);
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    console.log(start, end, mid);
    if (arr[mid] === key) {
      return mid;
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

const findElementInRotatedArray = (arr, key) => {
  let pivot = findPivot(arr);
  len = arr.length;
  if (arr[pivot] <= key && key <= arr[len - 1]) {
    console.log(" second line sending---->", pivot, len, key);
    return binarySearch(arr, pivot, len - 1, key);
  } else {
    // pivot = pivot - 1;
    console.log("first line sending---->", arr, pivot, key);
    return binarySearch(arr, 0, pivot, key);
  }
};
console.log(`element found at ${findElementInRotatedArray(arr, key)}`);
