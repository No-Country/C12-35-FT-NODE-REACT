import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @OneToOne(() => Account, (account) => account.id)
  // @JoinColumn({ name: "transactionhistory_account" })
  account: Account;

  @OneToMany(() => Transaction, (transaction) => transaction.id)
  // @JoinColumn({ name: "transactionhistory_transaction" })
  transactions: Transaction[];
}
