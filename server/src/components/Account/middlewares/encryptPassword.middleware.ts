import { NextFunction, Request, Response } from "express";
import Encryp from "../../../services/Encryp";
import response from "../../../utils/response";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;
    if (password) {
      req.body.password = await Encryp.encrypt(password);
    }
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
