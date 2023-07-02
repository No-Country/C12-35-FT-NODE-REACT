import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import router from "./routes";
import { ClientError } from "./utils/errors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(router);
server.use(
  (err: ClientError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
    });
  }
);

export default server;
