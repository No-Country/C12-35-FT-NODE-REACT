import { Request, Response } from "express";
import response from "../../../utils/response";
<<<<<<< HEAD
import UserService from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserService.createUsers(req.body);
=======
import UserServices from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserServices.createUser(req.body);
>>>>>>> b822c13 (.)
  return response(res, 200, newUser);
};
