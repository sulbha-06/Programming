const infinitCurry = (first) => {
  return (second) => {
    if (second) return infinitCurry(first + second);
    return first;
  };
};

console.log(infinitCurry(2)(3)(9)(9)());
