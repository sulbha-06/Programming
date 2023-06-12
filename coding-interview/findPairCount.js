/**
 * find pair of integers in array such that there lies exactly k number of elements which are divisible by x
 * ex -[1, 3, 5, 7, 9] , x = 2 , k = 2
 * pair (1,5),(3,7),(5,9)
 * o/p count - 3
 */
const arr = [1, 3, 5, 7, 9];
const x = 2;
const k = 2;
//o/p -2 pairs will be 1,5 & 3,7
const findPairCount = (arr, k, x) => {
  let count = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 0; j < arr.length; j++) {
      let left = arr[index];
      let right = arr[j];

      if (left < right && parseInt(right - left) == x * k) {
        count++;
      }
    }
  }
  return count;
};

console.log(findPairCount(arr, k, x));
