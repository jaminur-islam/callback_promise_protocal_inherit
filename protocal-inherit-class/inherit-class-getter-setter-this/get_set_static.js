// getter and setter

/* class Parson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get getUserName() {
    let num1 = 10;
    let num2 = 20;
    const allNumber = num1 + num2;
    return allNumber;
  }

  set setNickName(nick) {
    this.nickName = nick;
  }
}

const tamim = new Parson("Tamim", 20);
tamim.setNickName = "iqbal";
console.log(tamim.getUserName, `${tamim.name} ${tamim.nickName}`); */

//=============== Statice ==================//
// static shudu class name er moddhe available onno kothao theke use kora zabe na . static function er vitore this ke paoya jabe na | baire theke perametter dite parbo //
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static isTrue(age1, age2) {
    console.log(age1 === age2);
  }
}

const tamim = new Person("tamim", 20);
const shakib = new Person("shakib", 22);
console.log(tamim);
Person.isTrue(shakib.age, tamim.age); */

//===== polymorphism =====//
// child class theke parent class er kono method ke modify korar procedure ke polymorphism bole //

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play(name) {
    console.log(`${name || this.name} playing cricket`);
  }
}

class Cricketer extends Person {
  constructor(name1, age1, type, country) {
    super(name1, age1);
    this.type = type;
    this.country = country;
  }
  play() {
    super.play("sagor");
    super.play();
    // console.log("rupban e nache komor dulaiya");
  }
}
const shakib = new Cricketer("shakib", 20, "allRounder", "bangladesh");
console.log(shakib.play());
