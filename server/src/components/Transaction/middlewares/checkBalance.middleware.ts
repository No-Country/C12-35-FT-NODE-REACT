import { NextFunction, Request, Response } from "express";
import { ClientError } from "../../../utils/errors";
import response from "../../../utils/response";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    if (req.account.balance < req.amount)
      throw new ClientError(400, "el usuario no tiene suficiente saldo para realizar la transación");

    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
