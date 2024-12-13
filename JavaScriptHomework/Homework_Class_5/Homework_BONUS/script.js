//Literal
let car = 
{
  make:'BMW',
  model:'M3',
  displayCar : function() {
    console.log(`Car: ${this.make} ${this.model}`);
  }
};
car.displayCar();

//Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}
let personName = prompt("Enter the person's name:");
let personAge = prompt("Enter the person's age:");
let person = new Person(personName, personAge);
person.introduce();

//Notation
let house = new Object();
house.address = prompt("Enter the house address:");
house.type = prompt("Enter the type of house:");
house.displayHouse = function() {
  console.log(`House Address: ${this.address}, Type: ${this.type}`);
};
house.displayHouse();
