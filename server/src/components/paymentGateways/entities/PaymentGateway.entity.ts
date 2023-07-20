import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToMany } from "typeorm";
import { Transaction } from "../../transactions/entities/Transaction.entity";
import { Card } from "../../cards/entities/Card.entity";

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

<<<<<<< HEAD
  @OneToMany(() => Transaction, (transaction) => transaction.id)
  // @JoinColumn({ name: "payment_transaction" })
  transactions!: Transaction[];

  @ManyToMany(() => Card, (card) => card.id)
=======
  @ManyToMany(() => Card, (card) => card.payments)
>>>>>>> 0f31e4f (transaciones)
  // @JoinColumn({ name: "payment_card" })
  cards!: Card;
}
