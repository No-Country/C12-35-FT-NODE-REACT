import getTransactionsHistory from "./getTransactionsHistory.controller";
import createTransactionHistory from "./createTransactionHistory.controller";
import utils from "../../../utils";

export default {
  getTransactionsHistory: utils.catched(getTransactionsHistory),
  createTransactionHistory: utils.catched(createTransactionHistory)
};
