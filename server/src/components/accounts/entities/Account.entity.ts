import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/User.entity";
import { History } from "../../transactionHistories/entities/History.entity";
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

  @OneToOne(() => History)
  @JoinColumn()
  transaction_history: History;

  @OneToMany(() => Card, (card) => card.account)
  // @JoinColumn({ name: "card_id" })
  cards: Card[];
}
