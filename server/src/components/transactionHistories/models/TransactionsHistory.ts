import { IAccount } from "src/components/accounts/models/Account";

export interface ITransactionHistory {
  date: Date;
  account: IAccount;
  transactionId: number;
}
