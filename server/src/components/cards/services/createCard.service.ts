import { Card } from "../entities/Card.entity";
import db from "../data";

export default async (card: Card) => {
  const newCard = await db.save(card);
  return newCard;
};
