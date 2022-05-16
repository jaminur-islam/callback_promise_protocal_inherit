//====================callback to convert promise=========//

/* const payment = false ;

// promise definition
function enroll() {
  console.log("course enrolled");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled();
    } else {
      reject("error coming");
    }
  });
  return promise;
}
function progress() {
  console.log("admission completed");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled();
    } else {
      reject("error coming");
    }
  });
  return promise;
}
function gotCertificate() {
  const promise = new Promise(function (resoled, reject) {
    resoled("got the certificate");
  });
  return promise;
}

// promise call

enroll()
  .then(progress)
  .then(gotCertificate)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
 */

const payment = true;
const marks = 80;

function enroll() {
  console.log("enroll start");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled("good_ 1");
    } else {
      reject("Error payment");
    }
  });

  return promise;
}
function progress() {
  console.log("course progress");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled("good_ 2");
    } else {
      reject("Error progress");
    }
  });

  return promise;
}
function gotCertificate() {
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled("good_ 3");
    } else {
      reject("Error Certificate");
    }
  });

  return promise;
}

enroll()
  .then(progress)
  .then(gotCertificate)
  .then((res) => console.log(res));


// nasted function and then then then control
const num = true;

function fetci() {
  const promise = new Promise((resoled, reject) => {
    if (num) {
      const ob = { name: "sagor", age: 20 };
      resoled(ob);
    } else {
      reject(new Error("bad lack"));
    }
  });
  return promise;
}

function acceptData(ob) {
  return Promise.resolve(ob);
}

fetci()
  .then(acceptData)
  .then((res) => {
    console.log(res);
  });

