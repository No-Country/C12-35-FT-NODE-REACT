import getTransactionsHistory from "./getTransactionsHistory.controller";
import createTransactionHistory from "./createTransactionHistory.controller";
import getTransactionHistoryById from "./getTransactionHistoryById.controller";
import updateTransactionHistory from "./updateTransactionHistory.controller";
import deleteTransactionHistory from "./deleteTransactionHistory.controller";
import utils from "../../../utils";

export default {
  getTransactionsHistory: utils.catched(getTransactionsHistory),
  createTransactionHistory: utils.catched(createTransactionHistory),
  getTransactionHistoryById: utils.catched(getTransactionHistoryById),
  updateTransactionHistory: utils.catched(updateTransactionHistory),
  deleteTransactionHistory: utils.catched(deleteTransactionHistory)
};
