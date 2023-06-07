const parent = () => {
  const first = "first";
  let x = 2;

  return function child() {
    let y = 3;
    x++;
    console.log(x);
    return x;
  };
};
const callParent = parent();
console.log(callParent());
console.log(callParent());

