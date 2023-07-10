import getTransactions from "./getTransactions.controller";
import createTransaction from "./createTransaction.controller";
import updateTransaction from "./updateTransaction.controller";
import deleteTransaction from "./deleteTransaction.controller";
import getTransactionById from "./getTransactionById.controller";
import utils from "../../../utils";

export default {
  getTransactions: utils.catched(getTransactions),
  createTransaction: utils.catched(createTransaction),
  updateTransaction: utils.catched(updateTransaction),
  deleteTransaction: utils.catched(deleteTransaction),
  getTransactionById: utils.catched(getTransactionById)
};
