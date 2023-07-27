import { Card } from "../entities/Card.entity";
import getCards from "./getCards.service";
import createCard from "./createCard.service";
import updateCard from "./updateCard.service";
import getCardById from "./getCardById.service";
import deleteCard from "./deleteCard.service";

class CardService {
  async getCards() {
    const creditCards = await getCards();
    return creditCards;
  }

  async createCard(newCreditCard: Card) {
    const creditCardCreated = await createCard(newCreditCard);
    return creditCardCreated;
  }
  async updateCard(id: number, updatedCreditCard: Card) {
    const creditCardUpdated = await updateCard(id, updatedCreditCard);
    return creditCardUpdated;
  }
  async getCardById(id: number) {
    const creditCard = await getCardById(id);
    return creditCard;
  }
  async deleteCard(id: number) {
    const creditCardDeleted = await deleteCard(id);
    return creditCardDeleted;
  }
}

export default new CardService();
