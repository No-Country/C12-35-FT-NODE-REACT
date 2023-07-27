import { Request, Response } from "express";
import response from "../../../utils/response";
import CardService from "../services";

export default async (req: Request, res: Response) => {
  const data = await CardService.getCardById(parseInt(req.params.id));
  return response(res, 200, data);
};
