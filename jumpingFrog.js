/**
 * 
 * @returns 
A frog can either hop 5 cm or jump 10 cm forward. Calculate how many different ways 
there are for the frog to move forward by a given distance. For example, the frog can move
 forward 15 cm in 3 different ways:
 "hop->hop->hop", "jump->hop", and "hop->jump". The maximum distance is 4 meters.
 */
function countWays() {
  const ways = [1, 0]; // initialize the array

  for (let distance = 2; distance <= 400; distance++) {
    ways[distance] = (ways[distance - 5] || 0) + (ways[distance - 10] || 0);
  }

  return ways;
}

// Call the function and store the results in a variable
const allWays = countWays();

// Calculate the number of ways for a given distance
const distance = 15; // example distance
const numWays = allWays[distance];

console.log(`The number of ways to move forward ${distance} cm is: ${numWays}`);
