import db from "../data";

export default async () => {
  const paymentGateway = await db.getAll();
  return paymentGateway;
};
