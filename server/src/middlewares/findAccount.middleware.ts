import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/errors";
import response from "../utils/response";
import AccountService from "../components/Account/services";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) throw new ClientError(401, "no está autorizado");
    const account = await AccountService.getAccountById(req.userId);

    if (!account) throw new Error("no se ha encontrado el usuario");

    req.account = account;
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
