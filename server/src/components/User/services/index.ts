import { IUser, IUserFullName } from "../models/IUser";
import getUsers from "./getUsers.service";
import createUser from "./createUser.service";
import getUserById from "./getUsersById.service";
import deleteUser from "./deleteUser.service";
import updateUser from "./updateUser.service";

class UserService {
  async getUsers() {
    const users = await getUsers();
    return users;
  }
  async getUserById(id: number) {
    const user = await getUserById(id);
    return user;
  }
  async createUser(newUser: IUserFullName) {
    const userCreated = await createUser(newUser);
    return userCreated;
  }
  async deleteUser(id: number) {
    const userDeleted = await deleteUser(id);
    return userDeleted;
  }
  async updateUser(id: number, user: Partial<IUser>) {
    const userUpdated = await updateUser(id, user);
    return userUpdated;
  }
}
export default new UserService();
