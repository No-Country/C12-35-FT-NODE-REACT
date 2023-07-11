import getCards from "./getCards.controller";
import createCard from "./createCard.controller";
import updateCard from "./updateCard.controller";
import deleteCard from "./deleteCard.controller";
import getCardById from "./getCardById.controller";
import utils from "../../../utils";

export default {
  getCards: utils.catched(getCards),
  createCard: utils.catched(createCard),
  updateCard: utils.catched(updateCard),
  deleteCard: utils.catched(deleteCard),
  getCardById: utils.catched(getCardById)
};
