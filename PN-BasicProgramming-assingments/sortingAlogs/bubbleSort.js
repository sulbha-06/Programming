/**
 * bubble sort
 */
const arr = [10, 2, 6, 4, 7, 3];

const bubbleSort = (arr) => {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};
console.log(bubbleSort(arr));
