/**
 * Allocate n books to k currentStudentss so that each book is allocated and each currentStudents have atleast a book
 * the number of maximum pages of book allocated to each currentStudents i minimum
 */
const arr = [10, 20, 30, 40];

const canAllocate = (arr, totalStudents, mid) => {
  let currentStudents = 1;
  let pageSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      currentStudents++;
      //where number of books is more than number of currentStudentss
      if (currentStudents > totalStudents || arr[i] > mid) {
        return false;
      }
      pageSum = arr[i];
    }
  }
  return true;
};
const bookAllocation = (arr, students) => {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  let start = 0;
  let end = sum;
  let ans = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (canAllocate(arr, students, mid)) {
      ans = mid;
      end = mid - 1;
    } //mid is less than key so key could be on right
    else {
      start = mid + 1;
    }
  }
  return ans;
};
console.log(bookAllocation(arr, 2));
