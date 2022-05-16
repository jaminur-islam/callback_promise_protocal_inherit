//================================= prototype details ======================================//

// =========== Not need eta protocal e dukiye dibo ================//
/* const personMethod = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
  play() {
    console.log("person is playing");
  },
}; */

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  // Ei jinid gula Object.create er moddhe dukiya diyechi//
  /*  person.eat = personMethod.eat;
  person.play = personMethod.play;
  person.sleep = personMethod.sleep; */

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

// Object create
// =======Er maddhome prent er data chaild access korte pare.. and child er moddhe property add korte pari====//
/* const captain = {
  name: "Mashrafi",
  age: 35,
  country: "bangladesh",
};

const player = Object.create(captain);
console.log(player.age); */

// every function have a prototype
/* function test() {}
console.dir(test); */

/* const ob = Object.create();
console.log(ob); */
