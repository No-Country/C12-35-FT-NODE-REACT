import { Request, Response, NextFunction } from "express";

export default (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res).catch((err: Error) => next(err));
  };
};
