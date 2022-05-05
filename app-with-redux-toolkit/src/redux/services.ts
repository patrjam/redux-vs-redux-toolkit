let accountBalance = 0;

export const changeAccountState = async (
  deltaAmount: number,
  interestRateCalculation = false
): Promise<number> => {
  const randomError = Math.random() <= 0.75;
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      randomError
        ? resolve((accountBalance = Math.round(accountBalance + deltaAmount)))
        : reject(
            interestRateCalculation ? accountBalance : (accountBalance = 0),
          );
    }, 2000);
  });
};

export const actualBalance = (): number => {
  return accountBalance;
};
