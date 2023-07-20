import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/User.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";
import { Card } from "../../cards/entities/Card.entity";
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  date_created: Date;

  @Column()
  type: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => TransactionHistory)
  @JoinColumn()
  transaction_history: TransactionHistory;

  @OneToMany(() => Card, (card) => card.account)
  // @JoinColumn({ name: "card_id" })
  cards: Card[];
}
