//Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon
// Example

const toggelState = (...args) => {
  let stateOn = 1;
  let stateOnDes = "on";
  if (args[0] == "hello") {
    const hello = () => {
      return console.log("hello from closure");
    };
    return hello;
  }

  if (args[0] == "on") {
    const onOff = () => {
      let mystate = stateOn;
      if (mystate) {
        stateOn = !stateOn;
        return console.log("ON");
      } else {
        stateOn = !stateOn;
        return console.log("OFF");
      }
    };
    return onOff;
  }
};
const hello = toggelState("hello");

// hello();
const onOff1 = toggelState("on");
onOff1();
onOff1();
onOff1();
onOff1();