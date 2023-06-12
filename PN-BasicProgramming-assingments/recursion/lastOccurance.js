const nums = [1, 8, 6, 4, 8, 9];
const key = 8;
const lastOccurance = (arr,start, key) => {
  console.log(arr, key);
  if (start == 0) {
    return -1;
  }
  //   arr = ;
  arr.shift();
  let subIndex = lastOccurance(arr,start+1, key);
  if (subIndex == -1) {
    if (arr[0] == key) {
      return 0;
    } else {
      return -1;
    }
  } else {
    return subIndex + 1;
  }
};
console.log(lastOccurance(nums,0, key));

