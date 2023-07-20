import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/User.entity";
import { History } from "../../transactionHistories/entities/History.entity";
import { Card } from "../../cards/entities/Card.entity";

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
>>>>>>> b822c13 (.)

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
  @OneToMany(() => Card, (card) => card.account)
  // @JoinColumn({ name: "card_id" })
  cards: Card[];
>>>>>>> b822c13 (.)
}
