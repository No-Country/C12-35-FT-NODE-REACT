import { NextFunction, Request, Response } from "express";
import { ClientError } from "../../../utils/errors";
import response from "../../../utils/response";
import Exchange from "../../../services/Exchange";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { amount, type } = req.body;
    if (type === "USD") {
      let dolarPrice = await Exchange.getDolarPrice();
      dolarPrice = dolarPrice.venta.split(",")[0];
      req.body.amount = Number(dolarPrice) * amount;
      req.body.type = "ARS";
    }
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
