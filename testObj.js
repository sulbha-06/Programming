//write a program to iterate an object in js?

var object1 = {
    a: {
      b: {
        c: 12,
  
        j: false,
      },
      k: null,
    },
  };
  console.log("object",object1);
  const subObject = {...object1['a']}
  console.log("subObject--->",subObject);
  const subObject2 = {...subObject['b']}
  console.log(subObject2);