const payment = true;
const marks = 90;

function enroll(callback) {
  console.log("course enroll start");
  setTimeout(function () {
    if (payment) {
      callback();
    } else {
      console.log("enroll error");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progress");
  setTimeout(function () {
    if (marks > 80) {
      callback();
    } else {
      console.log("need more marks");
    }
  });
}

function gotCertificate() {
  setTimeout(function () {
    console.log("congrats! you got the certificate");
  });
}

/* enroll(function () {
  progress(function () {
    gotCertificate();
  });
});
 */
