// todo this file is not reducer - it is more service index - it belongs alongside with services
import {
  depositMoney,
  withdrawMoney,
  depositInterestRateMoney,
} from "../action-creator/account.service";

// todo in general we prefer named exports
const services = {
  account: {
    depositMoney,
    withdrawMoney,
    depositInterestRateMoney,
  },
};

export default services;
