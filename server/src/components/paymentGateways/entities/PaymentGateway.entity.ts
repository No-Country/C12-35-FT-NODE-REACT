import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToMany } from "typeorm";
import { Transaction } from "../../transactions/entities/Transaction.entity";
import { Card } from "../../cards/entities/Card.entity";

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.payment)
  // @JoinColumn({ name: "payment_transaction" })
  transactions: Transaction[];

  @ManyToMany(() => Card, (card) => card.payments)
  // @JoinColumn({ name: "payment_card" })
  cards: Card;
}
