// create a function constructor that works as a template for an Animal
function Animal(name, color, weight, personality) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.personality = personality;
  this.bio = `This is ${this.name}. The color of this animal is ${this.color}. It weighs ${this.weight} pounds. This animal has a ${this.personality} personality.`;
}
// include properties for name, type, weight, etc.

// create a new instance on an Animal
const garfield = new Animal("Garfield", "orange", 15, "sassy");
console.log(garfield.bio);
const clifford = new Animal("Clifford", "red", 300, "loyal");
console.log(clifford.bio);
// add methods to the Animal prototype
Animal.prototype.newBio = function() {
  console.log(this.bio);
};
garfield.newBio();
clifford.newBio();
// attach a method directly to the Animal instance that "overwrites" a prototype method
clifford.newBio = function() {
  console.log(`I'm not happy`);
};
clifford.newBio();

garfield.newBio = function() {
  console.log(`I hate Mondays!`);
};
garfield.newBio();

console.log(garfield);
