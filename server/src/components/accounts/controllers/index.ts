import getAccounts from "./getAccount.controller";
import createAccount from "./createAccount.controller";
import updateAccount from "./updateAccount.controller";
import deleteAccount from "./deleteAccount.controller";
import getAccountById from "./getAccountById.controller";
import utils from "../../../utils";

export default {
  getAccounts: utils.catched(getAccounts),
  createAccount: utils.catched(createAccount),
  updateAccount: utils.catched(updateAccount),
  deleteAccount: utils.catched(deleteAccount),
  getAccountById: utils.catched(getAccountById)
};
