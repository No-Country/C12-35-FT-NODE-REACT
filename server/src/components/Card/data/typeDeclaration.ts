import cards from "./fakeCards.json";
import { ICard } from "../models/Card";

const fakeCards: ICard[] = cards.map((obj) => {
  const card: ICard = {
    ...obj
  };

  return card;
});

export default fakeCards;
