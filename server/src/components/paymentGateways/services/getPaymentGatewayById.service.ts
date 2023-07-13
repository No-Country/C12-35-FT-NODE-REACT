import db from "../data";

export default async (id: number) => {
  const paymentGateway = await db.getById(id);
  return paymentGateway;
};
