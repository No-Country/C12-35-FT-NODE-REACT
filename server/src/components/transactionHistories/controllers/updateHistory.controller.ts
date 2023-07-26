import { Request, Response } from "express";
import response from "../../../utils/response";
import HistoryService from "../services";

export default async (req: Request, res: Response) => {
  const data = await HistoryService.updateTransactionHistory(parseInt(req.params.id), req.body);
  return response(res, 200, data);
};
