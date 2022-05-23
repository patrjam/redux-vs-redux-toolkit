let accountBalance = 0;

export const changeAccountState = async (
  deltaAmount: number,
  interestRateCalculation = false
) => {
  const randomError = Math.random() <= 0.75;

  await delay(2000);
  return randomError
    ? (accountBalance = Math.round(accountBalance + deltaAmount))
    : Promise.reject(
        interestRateCalculation ? accountBalance : (accountBalance = 0)
      );
};

export const actualBalance = () => {
  return accountBalance;
};

const delay = async (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
