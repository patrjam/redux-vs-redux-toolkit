// todo let our simulated server be responsible for 'real' state
let accountBalance = 0;

// todo we can have just one service something like 'changeAccountState' which will take delta amount
const depositMoney = async (amount) => {
  const randomError = Math.floor(Math.random() * 4);
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      randomError !== 0 // 25% chance of failure
        ? resolve(1000)
        : reject(new Error("No money deposit!"));
    }, 2000);
  });
};

// todo delete as it is not needed
const withdrawMoney = async (amount) => {
  const randomError = Math.floor(Math.random() * 5);
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      randomError !== 0 // 20% chance of failure
        ? resolve(1000)
        : reject(new Error("No money withdraw!"));
    }, 2500);
  });
};

// todo delete as it is not needed
const depositInterestRateMoney = () => {
  const randomError = Math.floor(Math.random() * 3);
  if (randomError === 2) {
    //33% change of failure

    throw new Error("Stolen 2% of money!");
  } else {
    return 1;
  }
};

export { depositMoney, withdrawMoney, depositInterestRateMoney };
