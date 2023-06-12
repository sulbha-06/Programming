function countWays(distance) {
  if (distance < 0) {
    return 0; // invalid distance, no ways to reach it
  }

  if (distance === 0 || distance < 5) {
    return 1; // base case: frog has reached the destination
  }

  const hopWays = countWays(distance - 5);
  const jumpWays = countWays(distance - 10);

  return hopWays + jumpWays;
}

// Calculate the number of ways for a given distance
const distance = 15; // example distance
const numWays = countWays(distance);

console.log(`The number of ways to move forward ${distance} cm is: ${numWays}`);
