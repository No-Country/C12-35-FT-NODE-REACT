import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../User/entities/User.entity";
import { Card } from "../../Card/entities/Card.entity";
import { Transaction } from "../../../components/Transaction/entities/Transaction.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
  @Column({ default: 0 })
  balance!: number;

  @Column({ default: "ARS" })
  type!: string;

  @OneToOne(() => User, (user) => user.accounts)
  @JoinColumn()
  user!: User;
=======
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
>>>>>>> b822c13 (.)

<<<<<<< HEAD
  @OneToOne(() => History)
  @JoinColumn()
  history: History;

<<<<<<< HEAD
  @OneToMany(() => TransactionHistory, (transactionHistory) => transactionHistory.id)
  transactionHistory!: TransactionHistory[];

  @OneToMany(() => Card, (card) => card.id)
  cards!: Card[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
=======
=======
>>>>>>> 7be6c0a (.)
  @OneToMany(() => Card, (card) => card.account)
  cards: Card[];
<<<<<<< HEAD
>>>>>>> b822c13 (.)
=======

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
>>>>>>> 7be6c0a (.)
}
