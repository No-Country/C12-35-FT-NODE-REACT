import db from "../data";
import { PaymentGateway } from "../entities/PaymentGateway.entity";

export default async (paymentGateway: PaymentGateway) => {
  const newPaymentGateway = await db.save(paymentGateway);
  return newPaymentGateway;
};
