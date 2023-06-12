/** 
 * @returns 
A frog can either hop 5 cm or jump 10 cm forward. Calculate how many different ways 
there are for the frog to move forward by a given distance. For example, the frog can move
 forward 15 cm in 3 different ways:
 "hop->hop->hop", "jump->hop", and "hop->jump". The maximum distance is 4 meters == 400cm.
 */
const maxDistance = 40;
const jumpingFrogRecursive = (distance) => {
  if (distance == 0) {
    return 1;
  }
  if (distance < 0) {
    return 0;
  }

  let ans =
    jumpingFrogRecursive(distance - 5) + jumpingFrogRecursive(distance - 10);
  return ans;
};
console.log(jumpingFrogRecursive(maxDistance));
