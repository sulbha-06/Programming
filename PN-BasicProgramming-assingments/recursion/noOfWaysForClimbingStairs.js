/**
 * a man can climb n steps of stairs in either 1 step at a time or 2 steps at a time , in how many ways he can cimb
 * stairs of n steps
 */
const totalNumberOFStairs = 5;

const noOfWaysForClimbing = (totalSteps) => {
  if (totalSteps == 0) {
    return 1;
  }
  if (totalSteps < 0) {
    return 0;
  }
  return (
    noOfWaysForClimbing(totalSteps - 1) + noOfWaysForClimbing(totalSteps - 2)
  );
};
console.log(noOfWaysForClimbing(totalNumberOFStairs));
//1 , 1,2,3,5