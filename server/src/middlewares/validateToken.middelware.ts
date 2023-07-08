import { NextFunction, Response } from "express";
import { ClientError } from "../utils/errors";
import Auth from "../services/Auth";

export default async (req: any, _res: Response, next: NextFunction) => {
  try {
    const token = await Auth.ensureToken(req);
    console.log("bvalidateToken: " + token);
    req.token = token;
    console.log("validateToken: " + req.token);
    next();
  } catch (error: any) {
    throw new ClientError(error.message, 403);
  }
};
