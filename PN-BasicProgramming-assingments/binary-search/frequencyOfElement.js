/** Implement a function that takes a sorted array
 *  as argument and returns the frequency of largest element.
 * */
const arr = [1, 2, 3, 7, 7, 7, 7];
const key = 7;
const firstOccurance = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    console.log(start, end, mid);
    if (arr[mid] === key) {
      ans = mid;
      end = mid - 1;
    }
    if (mid < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
const lastOccurance = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    console.log(start, end, mid);
    if (arr[mid] === key) {
      ans = mid;
      start = mid + 1;
    }
    if (mid < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
const findFrequency = (arr, key) => {
  const answer = { first: 0, last: 0 };
  answer.first = firstOccurance(arr, key);
  answer.last = lastOccurance(arr, key);
  console.log(`count is ${answer.last - answer.first + 1}`);
  return answer;
};
console.log(findFrequency(arr, key));
