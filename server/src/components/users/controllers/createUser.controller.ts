import { Request, Response } from "express";
import response from "../../../utils/response";
import UserServices from "../services";

export default async (req: Request, res: Response) => {
  const newUser = await UserServices.createUser(req.body);
  return response(res, 200, newUser);
};
