import getUsers from "./getUsers.controller";
import createUser from "./createUser.controller";
import getUserById from "./getUserById.controller";
import updateUser from "./updateUser.controller";
import deleteUser from "./deleteUser.controller";
import utils from "../../../utils";

export default {
  getUsers: utils.catched(getUsers),
  createUser: utils.catched(createUser),
  getUserById: utils.catched(getUserById),
  deleteUser: utils.catched(deleteUser),
  updateUser: utils.catched(updateUser)
};
