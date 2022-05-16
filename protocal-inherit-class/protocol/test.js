/* function Parson(name, age) {
  // const person = Object.create(Parson.prototype);
  this.age = age;
  this.name = name;

  // return person;
}

Parson.prototype = {

};

const shakib = new Parson("shakib", 20);
console.log(shakib.play());
 */
//=========convert to class===============//
class Parson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log("hi play the game ");
  }
}

const tamim = new Parson("sagor", 20);
console.log(tamim);
