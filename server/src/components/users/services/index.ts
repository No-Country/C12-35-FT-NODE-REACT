import { User } from "../../../components/users/entities/User.entity";
import { user1, user2 } from "../data/fakeUsers";
import getUsers from "./getUsers.service";
import createUsers from "./createUser.service";
import getUserById from "./getUsersById.service";
import verifyUser from "./verifyUser.service";

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
}
export default new UserService();
