import { NextFunction, Request, Response } from "express";
import { ClientError } from "../../../utils/errors";
import response from "../../../utils/response";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.body.amount) new ClientError(400, "Debe ingresarse un monto");
    req.amount = req.body.amount;
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
