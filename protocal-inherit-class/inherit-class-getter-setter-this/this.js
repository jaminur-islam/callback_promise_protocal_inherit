"use strict";
//==this ta use kora hoy kono ekta function ke reuse korar jonno==//
//===================implicit binding==================//
// prothome dekhbo kothay function ta call hoyeche and tar age kothao [.] ase kina thakle tar ager object tay this;

/* const shakib = {
  name: "shakib",
  age: 20,
  printPlayerName: function (name) {
    console.log(name);
  },
};
shakib.printPlayerName("sagor"); */

//============== example 2 ==================//
/* var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

const shakib = {
  name: "shakib",
  age: 20,
};
const tamim = {
  name: "Tamim",
  age: 20,
};
printPlayerNameFunction(shakib);
printPlayerNameFunction(tamim);
shakib.printPlayerName();
tamim.printPlayerName();
 */

//============example 3 ==================//
/* var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(`${this.name}`);
    },
  };
};

const tamim = Person("tamim", 20);
console.log(tamim.printName());
 */

//============example 4 ==================//
/* var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(`${this.name}`);
    },
    father: {
      name: "Mr. xxx",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};
const tamim = Person("tamim", 22);
console.log(tamim.father.printName()); */

//======================================================================================================================================================explicit binding===============================================================================================================//
// etar maddhome bole deya zay ze tmie this hisebe kon funciton use korbe;
// call: diye bole dite pari kon object ta this hbe object er por kono perametter dite caile ekta ekta kore variable dite hbe onno opay nei ;
// apply: eitao same shudu ekta ekta variable er jaygay array dite parbo;

// bind : eitar kaj r (call) er kaj eki shudu eita function e call kore dey na stor kore rakhe

const printName = function (v1, v2) {
  console.log(`${this.name} He have  ${v1} ${v2}`);
};

let shakib = {
  name: "sagor",
  age: 20,
};
let v1 = "good player";
let v2 = "good skill";
const v = [v1, v2];
// printName.call(shakib, v1, v2);
// printName.apply(shakib, v);
const storFunction = printName.bind(shakib, v);
storFunction();

// array distracture
/* const arr = [10, 20, 30];
[v1, v2, v3] = arr;
console.log(v1, v2, v3); */

// =========================================================================================================================================================================================================================================== New binding===================================================================================================================================//
// nije nije this name ekta object create kore ;
/* function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} ${this.age}`);
}

const tamim = new Person("tamim ", 20);
console.log(tamim);
 */

// =========================================================================================================================================================================================================================================== window  binding===================================================================================================================================//
// zodi kono this name kichu na thake tahole se window te cole zay [error dey na eita somadhan korte hole ]; ["use strict"] sobar opre bebohar kore hbe//

const printName2 = function () {
  //this window ke point kore
  console.log(this.name);
};

var sakib = {
  name: "shakib",
};

printName2();


