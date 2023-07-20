import { Account } from "../entities/Account.entity";
import getAccounts from "./getAccounts.service";
import createAccount from "./createAccount.service";
import updateAccount from "./updateAccount.service";
import deleteAccount from "./deleteAccount.service";
import getAccountById from "./getAccountById.service";
import createAccountPhoneVerification from "./createAccountPhoneVerification.service";
import verifyAccountPhone from "./verifyAccountPhone.service";
import verifyAccount from "./verifyAccount.service";

class AccountService {
  async getAccounts() {
    const accounts = await getAccounts();
    return accounts;
  }
  async getAccountById(id: number) {
    return await getAccountById(id);
  }
  async createAccount(newAccount: Account) {
    return await createAccount(newAccount);
  }
  async updateAccount(id: number, account: Account) {
    const accountUpdated = await updateAccount(id, account);
    return accountUpdated;
  }
  async deleteAccount(id: number) {
    const accountDeleted = await deleteAccount(id);
    return accountDeleted;
  }
  async createAccountPhoneVerification(id: number) {
    const account = await createAccountPhoneVerification(id);
    return account;
  }
  async verifyAccountPhone(id: number, secret: string, token: string) {
    const account = await verifyAccountPhone(id, secret, token);
    return account;
  }
  async verifyAccount(id: number) {
    const account = await verifyAccount(id);
    return account;
  }
}

export default new AccountService();
