import characters from "./characters.json";

export default {
  list: async () => {
    return characters;
  },
  create: async () => {
    throw Error;
  },
};
