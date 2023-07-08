import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/User.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";
import { Card } from "../../cards/entities/Card.entity";
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  balance!: number;

  @Column()
  date_created!: Date;

  @Column()
  type!: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  users!: User[];

  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions!: Transaction[];

  @OneToMany(() => TransactionHistory, (transactionHistory) => transactionHistory.id)
  transactionHistory!: TransactionHistory[];

  @OneToMany(() => Card, (card) => card.id)
  cards!: Card[];
}
