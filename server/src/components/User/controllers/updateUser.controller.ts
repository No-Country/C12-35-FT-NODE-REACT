//import { IUser } from "../models/IUser";
import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";
import { IUser } from "../models/IUser";

export default async (req: Request, res: Response) => {
  const updates: Partial<IUser> = req.body;
  const data = await UserService.updateUser(parseInt(req.params.id), updates);
  return response(res, 200, data);
};
