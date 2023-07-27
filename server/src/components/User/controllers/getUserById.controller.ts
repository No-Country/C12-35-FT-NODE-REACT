import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";

export default async (req: any, res: Response) => {
  const data = await UserService.getUserById(req.userId);
  return response(res, 200, data);
};
