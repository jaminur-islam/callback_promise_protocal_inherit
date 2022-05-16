const account = () => {
  let amount = 0;
  return function () {
    amount++;
    return amount;
  };
};

const tamim = account();
console.log(tamim());
console.log(tamim());
console.log(tamim());

/* const account = () => {
  let amount = 0;
  return {
    depositMany: function (many) {
      amount += many;
      return amount;
    },

    withdrawMany: function (many) {
      amount -= many;
      return amount;
    },
  };
};

const myAccount = account();
const myAccount2 = account();
let sagorMany = myAccount.depositMany(1000);
const shimMany = myAccount2.depositMany(1000);
sagorMany = myAccount.withdrawMany(500);

console.log({ sagorMany, shimMany }); */
