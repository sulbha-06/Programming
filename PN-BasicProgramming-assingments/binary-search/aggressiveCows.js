/**
 *given n number of cows and k number of stalls , 
 place the cows such that the minimum distance between the cows is maximum. 
 */
const stalls = [4, 1, 3, 2, 6];
const cows = 2;

const isPossibleSolution = (arr, cowsCount, mid) => {
  let cows = 1;
  let latsStalls = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - latsStalls >= mid) {
      cows++;
      if (cows === cowsCount) {
        return true;
      }
      latsStalls = arr[i];
    }
  }
  return false;
};
const aggressiveCowsDistance = (arr, cows) => {
  let start = arr[0];
  arr.sort();
  console.log(arr);
  let end = arr[arr.length - 1];
  let ans = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (isPossibleSolution(arr, cows, mid)) {
      ans = mid;
      end = mid - 1;
    } //mid is less than key so key could be on right
    else {
      start = mid + 1;
    }
  }
  return ans;
};
console.log(aggressiveCowsDistance(stalls, cows));
