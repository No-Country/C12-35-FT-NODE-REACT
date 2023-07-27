import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../User/entities/User.entity";
import { Card } from "../../Card/entities/Card.entity";
import { Transaction } from "../../../components/Transaction/entities/Transaction.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  date_created: Date;

  @Column()
  cvu: string;

  @Column()
  alias: string;

  @Column({ default: true })
  valid: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Card, (card) => card.account)
  cards: Card[];

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
}
