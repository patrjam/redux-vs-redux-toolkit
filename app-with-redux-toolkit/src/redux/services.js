let accountBalance = 0;

export const changeAccountState = async (
    deltaAmount,
    interestRateCalculation = false
) => {
    const randomError = Math.floor(Math.random() * 4);
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            randomError !== 0 // 25% chance of failure
                ? resolve((accountBalance = Math.round(accountBalance + deltaAmount)))
                : reject(
                    interestRateCalculation ? accountBalance : (accountBalance = 0),
                    new Error("Sorry, money stolen!")
                );
        }, 2000);
    });
};

export const actualBalance = () => {
    return accountBalance;
};