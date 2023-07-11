import { User } from "../models/Users";
import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";

export default async (req: Request, res: Response): Promise<Response<User, Record<string, any>>> => {
  const data = await UserService.updateUser(parseInt(req.params.id), req.body);
  return response(res, 200, data);
};
