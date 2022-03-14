// todo this file is not reducer - it is more service index - it belongs alongside with services
import {
  depositMoney,
  withdrawMoney,
  depositInterestRateMoney,
} from "./account.services";

export const services = {
  account: {
    depositMoney,
    withdrawMoney,
    depositInterestRateMoney,
  },
};

