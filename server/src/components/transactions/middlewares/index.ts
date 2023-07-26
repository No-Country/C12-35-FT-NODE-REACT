import dolarExchanger from "./dolarExchanger.middleware";
import startTransaction from "./startTransaction.middleware";
import checkBalance from "./checkBalance.middleware";
import findAccount from "./findAccount.middleware";
import setAmount from "./setAmount.middleware";
import addType from "./addType.middleware";

export default {
  dolarExchanger,
  startTransaction,
  checkBalance,
  findAccount,
  setAmount,
  addType
};
