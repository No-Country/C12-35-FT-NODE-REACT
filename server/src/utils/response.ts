import { Response } from "express";

export default function response(res: Response, status: number, data: any) {
  return res.status(status).json({ error: false, data });
}
