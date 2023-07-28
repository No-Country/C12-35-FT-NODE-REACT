import { Request, Response } from "express";
import response from "../../../utils/response";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import UserService from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserService.createUsers(req.body);
=======
>>>>>>> main
import UserServices from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserServices.createUser(req.body);
<<<<<<< HEAD
=======
>>>>>>> b822c13 (.)
>>>>>>> main
  return response(res, 200, newUser);
};
