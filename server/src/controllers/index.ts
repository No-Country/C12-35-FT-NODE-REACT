import getCharcaters from "./getCharacter.controller";
import createCharacter from "./createCharacter.controller";
import utils from "../utils";

export default {
  getCharcaters: utils.catched(getCharcaters),
  createCharacter: utils.catched(createCharacter),
};
