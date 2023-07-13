import { IUser } from "../models/IUser";
import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";
import DB from "../data";

export default async (req: Request, res: Response): Promise<Response<IUser, Record<string, any>>> => {
  const currentUser = await DB.getById(parseInt(req.params.id));
  const userToUpdate = { ...currentUser[0] };
  const secret = JSON.parse(userToUpdate.verified_phone).secret;
  const data = await UserService.verifyUserPhone(parseInt(req.params.id), secret, req.body.token);
  return response(res, 200, data);
};
