import { IClientError } from "./IClientError";

export class ClientError extends Error implements IClientError {
  statusCode: number;
  constructor(statusCode = 400, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default {
  ClientError
};
