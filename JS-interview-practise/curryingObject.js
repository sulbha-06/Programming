function findKeyAnywhere(obj) {
  console.log(obj, "\n");

  return function search(key) {
    if (!key) return undefined; // Return undefined if no key is provided

    const recursiveSearch = (currentObj) => {
      if (currentObj && typeof currentObj === "object") {
        if (key in currentObj) {
          console.log(key, currentObj[key]);
          return currentObj[key];
        }
        for (const value of Object.values(currentObj)) {
          const result = recursiveSearch(value);
          if (result !== undefined) return result;
        }
      }
      return undefined;
    };

    return recursiveSearch(obj);
  };
}

// Example Usage
const nestedObject = {
  user: {
    profile: {
      name: "Alice",
      address: {
        city: "Mumbai",
        pincode: 400001,
      },
    },
    age: 30,
  },
};

// console.log(findKeyAnywhere(nestedObject)("name")); // Output: Alice
console.log(findKeyAnywhere(nestedObject)("city")); // Output: Mumbai
