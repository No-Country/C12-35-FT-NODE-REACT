import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/errors";

export default (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) next();
  throw new ClientError("Error", 402);
};
