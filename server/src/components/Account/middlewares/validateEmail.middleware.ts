import { NextFunction, Request, Response } from "express";
import Encryp from "../../../services/Encryp";
import response from "../../../utils/response";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const result = emailRegex.test(email);
    if (!result) throw new Error("el formato del email es incorrecto");
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
