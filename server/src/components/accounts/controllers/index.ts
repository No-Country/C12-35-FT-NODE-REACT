import getAccounts from "./getAccount.controller";
import createAccount from "./createAccount.controller";
import updateAccount from "./updateAccount.controller";
import deleteAccount from "./deleteAccount.controller";
import getAccountById from "./getAccountById.controller";
import verifyAccountPhone from "./verifyAccountPhone.controller";
import verifyAccount from "./verifyAccount.controller";
import createAccountPhoneVerification from "./createAccountPhoneVerification.controller";
import utils from "../../../utils";

export default {
  getAccounts: utils.catched(getAccounts),
  createAccount: utils.catched(createAccount),
  updateAccount: utils.catched(updateAccount),
  deleteAccount: utils.catched(deleteAccount),
  getAccountById: utils.catched(getAccountById),
  verifyAccountPhone: utils.catched(verifyAccountPhone),
  verifyAccount: utils.catched(verifyAccount),
  createAccountPhoneVerification: utils.catched(createAccountPhoneVerification)
};
