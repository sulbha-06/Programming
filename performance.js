const arrayWithDuplicates = [1, 2, 2, 3, 3];
const removeDuplicates = (arrayWithDuplicates) => {
  return [...new Set(arrayWithDuplicates)];
};
const start = performance.now();
removeDuplicates(arrayWithDuplicates);
const end = performance.now();
console.log(`Time taken: ${end - start} milliseconds`);
