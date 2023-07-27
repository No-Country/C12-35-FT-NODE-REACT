import { NextFunction, Request, Response } from "express";
import { ClientError } from "../../../utils/errors";
import response from "../../../utils/response";
import Exchange from "../../../services/Exchange";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const { amount, currency } = req.body;
    if (currency === "USD") {
      let dolarPrice = await Exchange.getDolarPrice();
      dolarPrice = dolarPrice.venta.split(",")[0];
      req.amount = Number(dolarPrice) * amount;
      req.currency = "ARS";
      req.body.currency = "ARS";
    }
    if (currency === "ARS") {
      req.amount = req.body.amount;
    }
    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
