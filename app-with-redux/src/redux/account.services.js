// todo let our simulated server be responsible for 'real' state
let accountBalance = 0;

const changeAccountState = async (deltaAmount) => {
  const randomError = Math.floor(Math.random() * 4);
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      randomError !== 0 // 25% chance of failure
        ? resolve(1000)
        : reject(//(accountBalance = 0),
          new Error("Sorry, money stolen!"));
    }, 2000);
  });
};

export {
  changeAccountState,
};
