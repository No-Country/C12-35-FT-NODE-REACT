import getCards from "./getCards.controller";
import createCard from "./createCard.controller";
import utils from "../../../utils";

export default {
  getCards: utils.catched(getCards),
  createCard: utils.catched(createCard)
};
