import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { IMailerConfig } from "./interface";

const mailerConfig: IMailerConfig = {
  MAILER_PORT: process.env.MAILER_PORT || "465",
  MAILER_USER: process.env.MAILER_USER || "",
  MAILER_PASS: process.env.MAILER_PASS || ""
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
