//remove duplicate elements in ana array
function removeDuplicates(arr) {
  return arr.filter((elem, index) => {
    console.log(arr.indexOf(elem), index, elem);
    if (arr.indexOf(elem) === index) {
      return true;
    }
  });
}
console.log(removeDuplicates([1, 8, 9, 8, 7, 9, 1]));

let arrayWithDuplicates = [1, 2, 2, 3, 3];
let uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);