// promise all use to multiple promise value return ekSathe

const promise1 = Promise.resolve("task 1 completed");

const promise2 = new Promise((resoled, reject) => {
  setTimeout(() => {
    resoled("task 2 completed");
  }, 1);
});

const AwaitFunction = async () => {
  const res1 = await promise1;
  const res2 = await promise2;
  console.log(`${res1} is first and ${res2} is second`);
};

AwaitFunction();

/* promise1.then((res) => {
  console.log(res);
});
promise2.then((res) => {
  console.log(res);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
 */
