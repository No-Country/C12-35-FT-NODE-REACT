import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Transaction, (transaction) => transaction.history)
  transactions: Transaction[];
}
