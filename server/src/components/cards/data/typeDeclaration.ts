import cards from "./fakeCards.json";
import { Card } from "../entities/Card.entity";

const fakeCards: Card[] = cards.map((obj) => {
  const card: Card = {
    ...obj
  };

  return card;
});

export default fakeCards;
