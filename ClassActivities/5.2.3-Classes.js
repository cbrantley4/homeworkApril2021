// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(name, color, weight, personality) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.personality = personality;
    this.bio = `This is ${this.name}. The color of this animal is ${this.color}. It weighs ${this.weight} pounds. This animal has a ${this.personality} personality.`;
  }
  newBio() {
    console.log(this.bio);
  }
}
// extend the Animal class with a type of animal
// add some unique methods and properties to the class extension
class Cat extends Animal {
  constructor(name, color, weight, personality, height) {
    super(name, color, weight, personality);
    this.height = height;
  }
  newBio() {
    console.log(`Get away`);
  }
}

// create an instance of the class extension and call one of its methods
const loki = new Cat("Loki", "albino", 15, "king", "2 feet");
loki.newBio();
console.log(loki.bio);
