import { NextFunction, Response } from "express";
import { ClientError } from "../utils/errors";
import Auth from "../services/Auth";

export default async (req: any, _res: Response, next: NextFunction) => {
  try {
    const encoded = await Auth.validateToken(req.token);
    console.log(encoded);
    // req.userId = encoded.userId;
    next();
  } catch (error: any) {
    throw new ClientError(error.message, 403);
  }
};
