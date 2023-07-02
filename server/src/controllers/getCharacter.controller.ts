import { Character } from "../models/Character";
import db from "../data";
import { Request, Response } from "express";
import response from "../utils/response";

export default async (
  req: Request,
  res: Response
): Promise<Response<Character[], Record<string, any>>> => {
  const data = await db.list();
  return response(res, 200, data);
};
