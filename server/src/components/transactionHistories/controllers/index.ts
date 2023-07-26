import getsHistory from "./getHistory.controller";
import createHistory from "./createHistory.controller";
import getHistoryById from "./getHistoryById.controller";
import updateHistory from "./updateHistory.controller";
import deleteHistory from "./deleteHistory.controller";
import accountInfo from "./accountInfo.controller";
import utils from "../../../utils";

export default {
  getsHistory: utils.catched(getsHistory),
  createHistory: utils.catched(createHistory),
  getHistoryById: utils.catched(getHistoryById),
  updateHistory: utils.catched(updateHistory),
  deleteHistory: utils.catched(deleteHistory),
  accountInfo: utils.catched(accountInfo)
};
