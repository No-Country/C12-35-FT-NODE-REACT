import getUsers from "./getUsers.controller";
import createUser from "./createUser.controller";
import getUserById from "./getUserById.controller";
import verifyUser from "./verifyUser.controller";
import updateUser from "./updateUser.controller";
import deleteUser from "./deleteUser.controller";
import createUserPhoneVerification from "./createUserPhoneVerification.controller";
import verifyUserPhone from "./verifyUserPhone.controller";
import utils from "../../../utils";

export default {
  getUsers: utils.catched(getUsers),
  createUser: utils.catched(createUser),
  getUserById: utils.catched(getUserById),
  verifyUser: utils.catched(verifyUser),
  deleteUser: utils.catched(deleteUser),
  updateUser: utils.catched(updateUser),
  createUserPhoneVerification: utils.catched(createUserPhoneVerification),
  verifyUserPhone: utils.catched(verifyUserPhone)
};
