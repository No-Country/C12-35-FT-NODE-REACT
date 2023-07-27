import { Request, Response } from "express";
import response from "../../../utils/response";
import HistoryService from "../services";

export default async (req: Request, res: Response) => {
  const newTransactionHistory = await HistoryService.createTransactionHistory(req.body);
  return response(res, 200, newTransactionHistory);
};
