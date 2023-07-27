import { config } from "./Config"

const VITE_DOMAIN = config.domain

const transaction = {
  create: `${VITE_DOMAIN}/transactions/add`,
  send: `${VITE_DOMAIN}/transactions/transfer`,
  verify: `${VITE_DOMAIN}/accounts/info`
}
export default transaction
