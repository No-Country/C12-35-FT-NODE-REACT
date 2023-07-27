import dolarExchanger from "./dolarExchanger.middleware";
import startTransaction from "./startTransaction.middleware";
import checkBalance from "./checkBalance.middleware";
import setAmount from "./setAmount.middleware";
import addType from "./addType.middleware";

export default {
  dolarExchanger,
  startTransaction,
  checkBalance,
  setAmount,
  addType
};
