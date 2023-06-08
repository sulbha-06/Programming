/**
 * palindrom number
 */

const palindomeNumber = 44344;
const nonPalindromNumber = 787887;
const palindrome = (num, start, end) => {
  const nums = num.toString().split("");

  if (start === end) {
    console.log("equal ondit");
    return true;
  }
  if (nums[start] == nums[end]) {
    return palindrome(num, start + 1, end - 1);
  }

  return false;
};

console.log(palindrome(palindomeNumber, 0, 4));
console.log(palindrome(nonPalindromNumber, 0, 5));
