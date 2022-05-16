//========================Prototype=============================//
function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}
Person.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
  play() {
    console.log("person is playing");
  },
};

const sakib = Person("sakib", 45);
const musfiq = Person("musfiq", 40);
sakib.eat();
musfiq.play();
