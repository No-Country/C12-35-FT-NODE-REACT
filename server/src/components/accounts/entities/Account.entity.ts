import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "../../users/entities/User.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";
import { Card } from "../../cards/entities/Card.entity";
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 0 })
  balance!: number;

  @Column({ default: "ARS" })
  type!: string;

  @OneToOne(() => User, (user) => user.accounts)
  @JoinColumn()
  user!: User;

  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions!: Transaction[];

  @OneToMany(() => TransactionHistory, (transactionHistory) => transactionHistory.id)
  transactionHistory!: TransactionHistory[];

  @OneToMany(() => Card, (card) => card.id)
  cards!: Card[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
