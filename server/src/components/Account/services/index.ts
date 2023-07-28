import { Account } from "../entities/Account.entity";
import getAccounts from "./getAccounts.service";
import createAccount from "./createAccount.service";
import updateAccount from "./updateAccount.service";
import deleteAccount from "./deleteAccount.service";
import getAccountById from "./getAccountById.service";
<<<<<<< HEAD
import createAccountPhoneVerification from "./createAccountPhoneVerification.service";
import verifyAccountPhone from "./verifyAccountPhone.service";
import verifyAccount from "./verifyAccount.service";
import findOneAccount from "./findOneAccount.service";
=======
<<<<<<< HEAD
import getAccountBalance from "./getAccountBalance.service";
=======
import createAccountPhoneVerification from "./createAccountPhoneVerification.service";
import verifyAccountPhone from "./verifyAccountPhone.service";
import verifyAccount from "./verifyAccount.service";
<<<<<<< HEAD
>>>>>>> b822c13 (.)
=======
import findOneAccount from "./findOneAccount.service";
>>>>>>> f9b3515 (transactions)
>>>>>>> main

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  async getAccountBalance(id: number) {
    const balance = await getAccountBalance(id);
    return balance;
=======
>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> b822c13 (.)
>>>>>>> main
  }
  async findOneAccount(data: any) {
    return await findOneAccount(data);
  }
}

export default new AccountService();
