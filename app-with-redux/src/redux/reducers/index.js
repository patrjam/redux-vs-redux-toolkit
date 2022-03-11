import {
  depositMoney,
  withdrawMoney,
  depositInterestRateMoney,
} from "../action-creator/account.service";

const services = {
  account: {
    depositMoney,
    withdrawMoney,
    depositInterestRateMoney,
  },
};

export default services;
