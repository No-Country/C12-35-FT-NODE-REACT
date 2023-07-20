import { User } from "../../../components/users/entities/User.entity";
import getUsers from "./getUsers.service";
import createUser from "./createUser.service";
import getUserById from "./getUsersById.service";
import verifyUser from "../../accounts/services/verifyAccount.service";
import deleteUser from "./deleteUser.service";
import updateUser from "./updateUser.service";
import createUserPhoneVerification from "../../accounts/services/createAccountPhoneVerification.service";
import verifyUserPhone from "../../accounts/services/verifyAccountPhone.service";

class UserService {
  async getUsers() {
    const users = await getUsers();
    return users;
  }
  async getUserById(id: number) {
    const user = await getUserById(id);
    return user;
  }
  async createUser(newUser: User) {
    const userCreated = await createUser(newUser);
    return userCreated;
  }
  async deleteUser(id: number) {
    const userDeleted = await deleteUser(id);
    return userDeleted;
  }
  async updateUser(id: number, user: User) {
    const userUpdated = await updateUser(id, user);
    return userUpdated;
  }
}
export default new UserService();
