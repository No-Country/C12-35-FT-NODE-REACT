import { Card } from "../entities/Card.entity";
import fakeCards from "../data/typeDeclaration";
import getCards from "./getCards";
import createCard from "./createCard";

class CardService {
  private fakeCards: Card[] = fakeCards;

  async getCards() {
    const creditCards = await getCards();
    return creditCards;
  }

  async createCard(newCreditCard: Card) {
    const creditCardCreated = await createCard(newCreditCard);
    return creditCardCreated;
  }
}

export default new CardService();
