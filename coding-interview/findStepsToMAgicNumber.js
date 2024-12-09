//Tech m interview questions
let num = 8989;
const findSteps = (num) => {
  let count = 0;
  let result = 9999;

  while (result !== 6174 && result >= 999) {
    count++;
    let smallArray = num
      .toString()
      .split("")
      .map((a) => parseInt(a))
      .sort();
    let greaterArray = [...smallArray].reverse();
    result = Number(greaterArray.join("")) - Number(smallArray.join(""));
    console.log(
      Number(greaterArray.join("")) + "-" + Number(smallArray.join(""))
    );
    num = result;
    console.log(result);
  }
  return count;
};

console.log(findSteps(num));
// console.log('num----->',   num.toString().split("").sort((a,b)=>{
// return b-a ;
// }));
