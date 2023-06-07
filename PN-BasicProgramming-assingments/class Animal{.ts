class Animal{
    constructor(specie , habitat){
        specie = specie;
        habitat = habitat; 
    }
  move() {
    console.log("Moving along!");
  }
}
class Dog extends Animal {
    constructor(specie , habitat, speak,){
        super(specie , habitat);

    }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);