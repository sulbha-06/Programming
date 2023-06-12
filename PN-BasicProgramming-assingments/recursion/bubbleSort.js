const nums = [0, 8, 5, 7, 2, 3, 6, 4 , -1];

const bubbleSort = (arr, end) => {
  if (end == 1) {
    return;
  }
  //   console.log(arr, end);
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > arr[index + 1]) {
      let temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
    }
  }
  bubbleSort(arr, end - 1);
  return arr;
};
console.log(bubbleSort(nums, 6));

const bubbleSort2 = (arr, end, column) => {
  if (end == 1) {
    return;
  }
  if (column == end - 1) {
    bubbleSort2(arr, end - 1, 0);
    return;
  }
  if (arr[column] > arr[column + 1]) {
    let temp = arr[column];
    arr[column] = arr[column + 1];
    arr[column + 1] = temp;
  }
  bubbleSort2(arr, end, column + 1);
  return arr;
};
console.log("bubbleSort2---->", bubbleSort2(nums, 6, 0));
