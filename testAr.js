/*

- Write method findPath

- Should take two params:

    - object

    - keys separated by dots as string

- Return value if it exists at that path inside the object, else return undefined

*/

var object1 = {
  a: {
    b: {
      c: 12,

      j: false,
    },
    k: null,
  },
};

const findPath = (obj, path) => {
  let tempSubObc = { ...obj };
  let pathArray = [...path];
  const newPath = pathArray.filter((el) => el !== ".");
  for (let i = 0; i < newPath.length; i++) {

    if (!tempSubObc.hasOwnProperty(newPath[i])) {
      return undefined;
    }

    if (typeof tempSubObc[newPath[i]] !== typeof {}) {
      tempSubObc = tempSubObc[newPath[i]];
    } else {
      tempSubObc = { ...tempSubObc[newPath[i]] };
    }
  }
  return tempSubObc;
};

// console.log(findPath(object1, "a.b.c"));

//  console.log(findPath(object1, 'a.b.c')); // 12 ... by

// console.log(findPath(object1, 'a.b.c')); // 12

console.log(findPath(object1, 'a.b')); // {c: 12, j: false}

console.log(findPath(object1, 'a.b.d')); // undefined

console.log(findPath(object1, 'a.c')); // undefined

console.log(findPath(object1, 'a.b.c.d')); // undefined

console.log(findPath(object1, 'a.b.c.d.e')); // undefined

console.log(findPath(object1, 'a.b.j')); //false

console.log(findPath(object1, 'a.b.j.k')); //undefined

console.log(findPath(object1, 'a.k')); //null
console.log(object1.hasOwnProperty('c'));
