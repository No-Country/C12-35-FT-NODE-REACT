import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { IMailerConfig } from "./interface";
import { MAILER_PASS } from "../../config/envs";
import { MAILER_USER } from "../../config/envs";
import { MAILER_PORT } from "../../config/envs";

const mailerConfig: IMailerConfig = {
  MAILER_PORT,
  MAILER_USER,
  MAILER_PASS
};

const nodemailerConfig = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt(mailerConfig.MAILER_PORT),
  secure: true,
  auth: {
    user: mailerConfig.MAILER_USER,
    pass: mailerConfig.MAILER_PASS
  }
});

export default nodemailerConfig;
