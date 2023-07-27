import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";

export default async (req: Request, res: Response) => {
  const data = await AccountService.verifyAccount(parseInt(req.params.id));
  return response(res, 200, data);
};
