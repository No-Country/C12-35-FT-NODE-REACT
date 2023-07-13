import { Response } from "express";

export default function response(res: Response, status: number, data: any, error = false) {
  return res.status(status).json({ error, data });
}
