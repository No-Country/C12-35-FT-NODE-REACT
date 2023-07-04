import getUsers from "./getUsers.controller";
import createUser from "./createUser.controller";
import utils from "@/utils";

export default {
  getUsers: utils.catched(getUsers),
  createUser: utils.catched(createUser)
};
