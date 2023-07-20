import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";
import DB from "../../users/data";

export default async (req: Request, res: Response) => {
  const currentUser = await DB.getById(parseInt(req.params.id));
  const userToUpdate = { ...currentUser };
  const secret = JSON.parse(userToUpdate.verified_phone).secret;
  const data = await AccountService.verifyAccountPhone(parseInt(req.params.id), secret, req.body.token);
  return response(res, 200, data);
};
