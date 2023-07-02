import { Character } from "../models/Character";
import { Request, Response } from "express";
import response from "../utils/response";
import db from "../data";

export default async (req: Request<any, any, Character>, res: Response) => {
  const newCharacter = await db.create();
  return response(res, 200, newCharacter);
};
