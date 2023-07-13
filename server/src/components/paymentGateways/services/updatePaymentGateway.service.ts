import db from "../data";
import { PaymentGateway } from "../entities/PaymentGateway.entity";

export default async (id: number, paymentGateway: PaymentGateway) => {
  const newPaymentGateway = await db.update(id, paymentGateway);
  return newPaymentGateway;
};
