/**
 * input 2022
 * output two zero two two
 */
const num = 2022;
const spellNumber = (num) => {
  const spell = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (num == 0) {
    return;
  }
  const lastDigit = num % 10;
  spellNumber(parseInt(num / 10));
  console.log(spell[lastDigit]);
};

// spellNumber(num);
const obj = { x: 5, y: 42 };
console.log(obj.length == undefined);