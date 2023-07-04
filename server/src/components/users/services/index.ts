import { User } from "../../../components/users/entities/User.entity";
import { user1, user2 } from "../data/fakeUsers";
import getUsers from "./getUsers.service";
import createUsers from "./createUser.service";

class UserService {
  private fakeUsers: User[] = [user1, user2];

  async getUsers() {
    const users = await getUsers();
    return users;
  }

  async createUsers(newUser: User) {
    const userCreated = await createUsers(newUser);
    return userCreated;
  }
}

export default new UserService();
