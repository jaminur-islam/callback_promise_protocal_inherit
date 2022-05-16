const payment = false;

function enroll() {
  console.log("start enroll");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled();
    } else {
      reject("enroll error");
    }
  });

  return promise;
}
function progress() {
  console.log("start progress");
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled();
    } else {
      reject("enroll error");
    }
  });

  return promise;
}
function certificate() {
  const promise = new Promise(function (resoled, reject) {
    if (payment) {
      resoled("He got the certificate");
    }
  });

  return promise;
}

async function callFunction() {
  try {
    await enroll();
    await progress();
    const result = await certificate();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

callFunction();
