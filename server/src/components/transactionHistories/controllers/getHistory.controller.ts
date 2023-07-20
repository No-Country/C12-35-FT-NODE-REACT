import { Request, Response } from "express";
import response from "../../../utils/response";
import HistoryService from "../services";

export default async (req: Request, res: Response) => {
  const data = await HistoryService.getTransactionsHistory();
  return response(res, 200, data);
};
