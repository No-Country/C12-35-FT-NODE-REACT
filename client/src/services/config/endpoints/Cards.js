import { config } from "./Config"

const VITE_DOMAIN = config.domain

const managingCards = {
  cards: `${VITE_DOMAIN}/cards`,
  addCard: `${VITE_DOMAIN}/cards`
}

export default managingCards
