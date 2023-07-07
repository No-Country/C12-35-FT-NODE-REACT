import getTransactions from "./getTransactions.controller";
import createTransaction from "./createTransaction.controller";
import utils from "../../../utils";

export default {
  getTransactions: utils.catched(getTransactions),
  createTransaction: utils.catched(createTransaction)
};
