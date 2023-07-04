import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserService.createUsers(req.body);
  return response(res, 200, newUser);
};
