const base = 2;
const power = 4;

const powerOfN = (base, power) => {
  //base case
  if (power == 0) {
    return 1;
  }
  //recursive call
  return base * powerOfN(base, power - 1);
};

//optimized version
const powerOfN2 = (base, power) => {
  //base case

  if (power == 0) {
    return 1;
  }
  //recursive call
  let subProblem = powerOfN2(base, parseInt(power / 2));
  let subProblemSq = subProblem * subProblem;
  if (power % 2 !== 0) {
    return base * subProblemSq;
  }
  return subProblemSq;
};
console.log(powerOfN(base, power));
console.log(powerOfN2(base, power));
