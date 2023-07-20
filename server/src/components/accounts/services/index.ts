import { Account } from "../entities/Account.entity";
import getAccounts from "./getAccounts.service";
import createAccount from "./createAccount.service";
import updateAccount from "./updateAccount.service";
import deleteAccount from "./deleteAccount.service";
import getAccountById from "./getAccountById.service";
import getAccountBalance from "./getAccountBalance.service";

class AccountService {
  async getAccounts() {
    const accounts = await getAccounts();
    return accounts;
  }
  async getAccountById(id: number) {
    const account = await getAccountById(id);
    return account;
  }
  async createAccount(newAccount: Account) {
    const accountCreated = await createAccount(newAccount);
    return accountCreated;
  }
  async updateAccount(id: number, account: Account) {
    const accountUpdated = await updateAccount(id, account);
    return accountUpdated;
  }
  async deleteAccount(id: number) {
    const accountDeleted = await deleteAccount(id);
    return accountDeleted;
  }
  async getAccountBalance(id: number) {
    const balance = await getAccountBalance(id);
    return balance;
  }
}

export default new AccountService();
