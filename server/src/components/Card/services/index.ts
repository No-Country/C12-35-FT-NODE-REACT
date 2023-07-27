import { Card } from "../entities/Card.entity";
import getCards from "./getCards.service";
import createCard from "./createCard.service";
import updateCard from "./updateCard.service";
import getCardById from "./getCardById.service";
import deleteCard from "./deleteCard.service";

class CardService {
  async getCards() {
    return await getCards();
  }

  async createCard(newCreditCard: Card) {
    const creditCardCreated = await createCard(newCreditCard);
    return creditCardCreated;
  }
  async updateCard(id: number, updatedCreditCard: Card) {
    const creditCardUpdated = await updateCard(id, updatedCreditCard);
    return creditCardUpdated;
  }
  async getCardById(id: string) {
    const creditCard = await getCardById(id);
    return creditCard;
  }
  async deleteCard(id: number) {
    const creditCardDeleted = await deleteCard(id);
    return creditCardDeleted;
  }
}

export default new CardService();
