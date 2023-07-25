import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Card } from "../../cards/entities/Card.entity";

enum PaymentEnum {
  MercadoPago = "MercadoPago",
  PayPal = "PayPal"
}

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id!: number;

<<<<<<< HEAD
  @Column()
  type!: string;
=======
  @Column({
    type: "enum",
    enum: PaymentEnum
  })
  name: string;
>>>>>>> 2cc9266 (.)

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
