/* function Person(name, age) {
  //parent class
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

function Cricketer(name, age, type, country) {
  // child class
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function () {
  console.log(`${this.name} is playin`);
};

const shakib = new Cricketer("shakib", 20, "allRounder", "bangladesh");
console.log(shakib.eat());
 */
//================================================================================================================================================ CONVERT TO CLASS=========================================================================================================//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }

  eat() {
    console.log(`${this.name} is eating now `);
  }
}

const shakib = new Cricketer("shakib", 20, "allRounder", "bangladesh");
console.log(shakib);
const tamim = new Person("tamim", 20);
console.log(tamim);
