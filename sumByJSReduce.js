/**
 * calculate sum of array eleents using the js reduce function
 */
const array1 = [1, 2, 3, 4];
const initialValue0 = 0; //this is to provide the staring value of the sum to which rest of the array elemts will get added here its 0
const sumWithInitial0 = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue0 //+0
);
console.log(sumWithInitial0); //output--->10

const initialValue1 = 1; //this is to provide the staring value of the sum to which rest of the array elemts will get added here its 1
const sumWithInitial1 = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue1 //+1
);
console.log(sumWithInitial1); //output--->11
