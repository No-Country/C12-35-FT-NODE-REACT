//import { IUser } from "../models/IUser";
import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";
import { IUser } from "../models/IUser";

export default async (req: any, res: Response) => {
  const updates: Partial<IUser> = req.body;
  const data = await UserService.updateUser(parseInt(req.userId), updates);
  return response(res, 200, data);
};
