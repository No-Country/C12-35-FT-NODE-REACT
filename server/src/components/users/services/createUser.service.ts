import { User } from "../entities/User.entity";
import db from "../data";
import { IUserFullName } from "../models/IUser";

export default async (user: IUserFullName) => {
  const { first_name, last_name } = user;

  const newUser: User = new User();

  newUser.address = "";
  newUser.local_address = "";
  newUser.phone_number = "";
  newUser.postal_code = "";
  newUser.phone_number = "";
  newUser.profile_picture = "";
  newUser.country = "";
  newUser.document_type = "";
  newUser.document_number = "";
  newUser.birthdate = new Date();
  newUser.first_name = first_name;
  newUser.last_name = last_name;

  const createUser = await db.save(newUser);
  return createUser;
};
