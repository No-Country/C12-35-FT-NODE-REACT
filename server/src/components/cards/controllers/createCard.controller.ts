import { Request, Response } from "express";
import response from "../../../utils/response";
import CardService from "../services";

export default async (req: Request, res: Response) => {
  const newCard = await CardService.createCard(req.body);
  return response(res, 200, newCard);
};
