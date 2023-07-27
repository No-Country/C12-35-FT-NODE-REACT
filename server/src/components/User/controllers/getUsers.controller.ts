import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";

export default async (req: Request, res: Response) => {
  const data = await UserService.getUsers();
  return response(res, 200, data);
};
