import { NextFunction, Response } from "express";
import Auth from "../services/Auth";
import response from "../utils/response";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const encoded: any = await Auth.validateToken(req.token);
    console.log(encoded);
    req.userId = encoded.id;
    next();
  } catch (error: any) {
    response(res, 403, error.message, true);
  }
};
