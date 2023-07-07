import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: Date;

  @Column()
  transactionId!: number;

  @ManyToOne(() => Account, (account) => account.id)
  accounts!: Account[];

  @ManyToOne(() => Transaction, (transaction) => transaction.id)
  transaction!: Transaction;
}
