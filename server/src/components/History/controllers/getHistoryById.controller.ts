import { Request, Response } from "express";
import response from "../../../utils/response";
import HistoryService from "../services";

export default async (req: any, res: Response) => {
  const transactionHistory = await HistoryService.getTransactionsHistoryById(parseInt(req.userId));
  return response(res, 200, transactionHistory);
};
