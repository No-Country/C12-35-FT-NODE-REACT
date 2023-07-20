import { NextFunction, Response } from "express";
import Auth from "../services/Auth";
import response from "../utils/response";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = await Auth.ensureToken(req);
    req.token = token;
    next();
  } catch (error: any) {
    response(res, 403, error.message, true);
  }
};
