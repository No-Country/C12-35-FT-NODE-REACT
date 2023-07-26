import { NextFunction, Request, Response } from "express";
import db from "../data";
import response from "../../../utils/response";
import { ClientError } from "../../../utils/errors";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user: any = await db.findOne({ email });
    if (user) throw new ClientError("El email que intenta registrar ya está en uso", 404);
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
