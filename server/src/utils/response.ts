import { Response } from "express";

export default function response(res: Response, status = 400, data: any, error = false) {
  return res.status(status).json({ error, data });
}
