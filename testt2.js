const optionsArr = [
  "red",
  { code: "red", label: "test" },
  { code: "blue", label: "test1" },
  "white",
  "blue",
  { code: "red", label: "test2" },
];
const input1 = [{ code: "red", value: "test2" }]; //array of object
const input2 = [{ code: "blue" }];

// args- object1, obj2-> array of objects
// o/p-expectedin- optionsArr,input1 - output: [{ "code": "red" , "label": test2"}];
// in- optionsArr, input2
// o/p---["blue"];

const compareMyObjects = (optionsArray, input) => {
  console.log({ ...input }[0]);
  const filteredObject = [...optionsArray].filter(
    el => typeof el === typeof {}
  );
  const outputArray = filteredObject.filter(el =>
      JSON.stringify(Object.values(el)) ===
      JSON.stringify(Object.values({ ...input }[0]))
  );
  if (outputArray.length > 0) {
    return outputArray;
  } else {
    return Object.values({ ...input }[0]);
  }
};
compareMyObjects(optionsArr, input2);
console.log(compareMyObjects(optionsArr, input2));
console.log(compareMyObjects(optionsArr, input1));
