import { NextFunction, Request, Response } from "express";
import { ClientError } from "../../../utils/errors";
import Encryp from "../../../services/Encryp";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  req.body.password = await Encryp.encrypt(password);
  next();
};
