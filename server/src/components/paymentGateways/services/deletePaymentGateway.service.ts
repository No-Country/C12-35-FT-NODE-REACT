import db from "../data";

export default async (id: number) => {
  const paymentGateway = await db.delete(id);
  return paymentGateway;
};
