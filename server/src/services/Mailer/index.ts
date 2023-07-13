import nodemailer from "nodemailer";
import nodemailerConfig from "./config";

class Mailer {
  private transporter: nodemailer.Transporter;

  constructor(transporter: nodemailer.Transporter) {
    this.transporter = transporter;
  }

  async sendMail(to: string, subject: string, text: string) {
    try {
      await this.transporter.sendMail({
        from: "Fund Wave",
        to,
        subject,
        text
      });
    } catch (error) {
      return error;
    }
  }
  async sendMailWithHtml(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({
        from: "Fund Wave",
        to,
        subject,
        html
      });
    } catch (error) {
      return error;
    }
  }
  async sendMailWithAttachments(to: string, subject: string, text: string, attachments: any) {
    try {
      await this.transporter.sendMail({
        from: "Fund Wave",
        to,
        subject,
        text,
        attachments
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Mailer(nodemailerConfig);
