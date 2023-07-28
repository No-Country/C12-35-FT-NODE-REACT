import getAccounts from "./getAccount.controller";
import createAccount from "./createAccount.controller";
import updateAccount from "./updateAccount.controller";
import deleteAccount from "./deleteAccount.controller";
import getAccountById from "./getAccountById.controller";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import getAccountBalance from "./getAccountBalance.controller";
=======
>>>>>>> main
import verifyAccountPhone from "./verifyAccountPhone.controller";
import verifyAccount from "./verifyAccount.controller";
import accountInfo from "./accountInfo.controller";
import createAccountPhoneVerification from "./createAccountPhoneVerification.controller";
<<<<<<< HEAD
=======
>>>>>>> b822c13 (.)
>>>>>>> main
import utils from "../../../utils";

export default {
  getAccounts: utils.catched(getAccounts),
  createAccount: utils.catched(createAccount),
  updateAccount: utils.catched(updateAccount),
  deleteAccount: utils.catched(deleteAccount),
  getAccountById: utils.catched(getAccountById),
<<<<<<< HEAD
  verifyAccountPhone: utils.catched(verifyAccountPhone),
  verifyAccount: utils.catched(verifyAccount),
  createAccountPhoneVerification: utils.catched(createAccountPhoneVerification),
  accountInfo: utils.catched(accountInfo)
=======
<<<<<<< HEAD
  getAccountBalance: utils.catched(getAccountBalance)
=======
  verifyAccountPhone: utils.catched(verifyAccountPhone),
  verifyAccount: utils.catched(verifyAccount),
<<<<<<< HEAD
  createAccountPhoneVerification: utils.catched(createAccountPhoneVerification)
>>>>>>> b822c13 (.)
=======
  createAccountPhoneVerification: utils.catched(createAccountPhoneVerification),
  accountInfo: utils.catched(accountInfo)
>>>>>>> 1a68848 (.)
>>>>>>> main
};
