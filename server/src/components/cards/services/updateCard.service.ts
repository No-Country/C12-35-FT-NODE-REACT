import { Card } from "../entities/Card.entity";
import db from "../data";

export default async (id: number, card: Card) => {
  const newCard = await db.update(id, card);
  return newCard;
};
