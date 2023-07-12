import { User } from "../../../components/users/entities/User.entity";
import { user1, user2 } from "../data/fakeUsers";
import getUsers from "./getUsers.service";
import createUsers from "./createUser.service";
import getUserById from "./getUsersById.service";
import verifyUser from "./verifyUser.service";
import deleteUser from "./deleteUser.service";
import updateUser from "./updateUser.service";
import createUserPhoneVerification from "./createUserPhoneVerification.service";
import verifyUserPhone from "./verifyUserPhone.service";

class UserService {
  private fakeUsers: User[] = [user1, user2];

  async getUsers() {
    const users = await getUsers();
    return users;
  }
  async getUserById(id: number) {
    const user = await getUserById(id);
    return user;
  }
  async createUsers(newUser: User) {
    const userCreated = await createUsers(newUser);
    return userCreated;
  }
  async verifyUser(id: number) {
    const verifiedUser = await verifyUser(id);
    return verifiedUser;
  }
  async deleteUser(id: number) {
    const userDeleted = await deleteUser(id);
    return userDeleted;
  }
  async updateUser(id: number, user: User) {
    const userUpdated = await updateUser(id, user);
    return userUpdated;
  }
  async createUserPhoneVerification(id: number) {
    const user = await createUserPhoneVerification(id);
    return user;
  }
  async verifyUserPhone(id: number, secret: string, token: string) {
    const user = await verifyUserPhone(id, secret, token);
    return user;
  }
}
export default new UserService();
