import getTransactions from "./getTransactions.controller";
import addAmount from "./addAmount.controller";
import updateTransaction from "./updateTransaction.controller";
import deleteTransaction from "./deleteTransaction.controller";
import getTransactionById from "./getTransactionById.controller";
import transfer from "./transfer.controller";
import subtractAmount from "./subtractAmount.controller";
import utils from "../../../utils";

export default {
  getTransactions: utils.catched(getTransactions),
  addAmount: utils.catched(addAmount),
  subtractAmount: utils.catched(subtractAmount),
  updateTransaction: utils.catched(updateTransaction),
  deleteTransaction: utils.catched(deleteTransaction),
  getTransactionById: utils.catched(getTransactionById),
  transfer: utils.catched(transfer)
};
