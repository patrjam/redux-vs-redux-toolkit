import { customDelay } from "./customFunctions/customDelay";

let accountBalance = 0;

export const changeAccountState = async (
  deltaAmount: number,
  interestRateCalculation = false
) => {
  const randomError = Math.random() <= 0.75;

  await customDelay(2000);
  if (randomError) {
    let updatedBalance = Math.round(accountBalance + deltaAmount);
    return (accountBalance = updatedBalance);
  } else {
    throw new Error(
      String(interestRateCalculation ? accountBalance : (accountBalance = 0))
    );
  }
};

export const actualBalance = () => {
  return accountBalance;
};
