import characters from "./characters.json";

// este objeto servirá para que la app sea agnostica de la db
export default {
  list: async () => {
    return characters;
  },
  create: async () => {
    return "created";
  }
};
