import { Request, Response } from "express";
import response from "../../../utils/response";
import UserService from "../services";
import Mailer from "../../../services/Mailer";
import { HOST } from "../../../config/envs";

export default async (req: Request, res: Response) => {
  const newUser = await UserService.createUsers(req.body);
  const to = newUser.email;
  const subject = "Verify your email";
  const text = `${HOST}/users/verify/${newUser.id}`;
  await Mailer.sendMail(to, subject, text);

  return response(res, 200, newUser);
};
