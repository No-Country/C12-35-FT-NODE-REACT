import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Transaction, (transaction) => transaction.history)
  transactions: Transaction[];
}
