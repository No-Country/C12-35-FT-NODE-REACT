import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  valid: boolean;

  @OneToMany(() => Transaction, (transaction) => transaction.history)
  transactions: Transaction[];
}
