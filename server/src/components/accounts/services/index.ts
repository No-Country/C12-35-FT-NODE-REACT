import { Account } from "../entities/Account.entity";
import getAccounts from "./getAccounts.service";
import createAccount from "./createAccount.service";

class AccountService {
  async getAccounts() {
    const accounts = await getAccounts();
    return accounts;
  }

  async createAccount(newAccount: Account) {
    const accountCreated = await createAccount(newAccount);
    return accountCreated;
  }
}

export default new AccountService();
