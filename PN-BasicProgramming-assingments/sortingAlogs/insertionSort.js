/**
 * insertion sort
 */
const arr = [10, 2, 6, 4, 7, 3];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev = prev - 1;
    }
    arr[prev + 1] = current;
  }

  return arr;
};
console.log(insertionSort(arr));
