/*
Odd or Even Number
Read a number N and print whether it is odd or even.
(Note: you should print the answer in lowercase letters)
*/
const a = 5;
const b = 6;
const findEvenOrOddNumber = (num) => {
    if(num==2)
    return 'even'
  if (num > 2) {
    if (num % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
};
console.log(findEvenOrOddNumber(a));
console.log(findEvenOrOddNumber(b));
console.log(findEvenOrOddNumber(6));