import { Request, Response } from "express";
import response from "../../../utils/response";
import db from "../data";

export default async (_req: Request, res: Response) => {
  const data = await db.getPopulateTransaction();
  return response(res, 200, data);
};
