/* class fatherName {
  constructor(fName) {
    this.name = fName;
  }

  work() {
    return "Now father is bides";
  }
}

class son extends fatherName {
  constructor(fName, sName) {
    super(fName);
    this.sName = sName;
  }

  sWork() {
    return `son copy to father work ${this.work()}`;
  }
}

const sagor = new son("nurlam", "sagor");
console.log(sagor.sWork()); */

/* class carName {
  constructor(name) {
    this.name = name;
    this.age = name;
  }

  get myName() {
    return this.name;
  }

  set myName(name) {
    this.name1 = name;
  }
}

const sagor = new carName("sagor ");
sagor.myName = "shimul";
console.log(sagor); */

/* class player {
  constructor(name, age, cls) {
    this.name = name;
    this.age = age;
    this.cls = cls;
  }
  eat() {
    console.log("this is eating e rice");
  }

  set myMethod(method) {
    this.run = method;
  }
}

const tamim = new player("sagor", 20, 7);
tamim.method = function () {
  console.log("hi");
};
console.log(tamim.method()); */

//==========================master Object===============//
//prototype chine mane holo ami ekta object likhlam kinttu tar moddhe ekta value access korte caitechi za tar moddhe nei kinttu tar parent er moddhe asi..eij access korte parlam eitay prototype chine //

/* const f = function Person() {};
console.dir(f); */

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log("play the game now ");
  }
}

const shimul = new Person("sagor", 20);
console.log(shimul);

Object.prototype.sagor = function () {
  console.log("this is sagor the chuto vai");
};

const ob = {};
const sagori = () => {
  console.log("hi hansome ");
};
 */
