import getAccounts from "./getAccount.controller";
import createAccount from "./getAccount.controller";
import utils from "../../../utils";

export default {
  getAccounts: utils.catched(getAccounts),
  createAccount: utils.catched(createAccount)
};
