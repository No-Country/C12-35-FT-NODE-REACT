import { NextFunction, Request, Response } from "express";
import userDb from "../../../services/Auth/data/user.db";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const user: any = await userDb.findOne({ email });
  if (user) throw new Error("El email que intenta registrar ya está en uso");
  next();
};
