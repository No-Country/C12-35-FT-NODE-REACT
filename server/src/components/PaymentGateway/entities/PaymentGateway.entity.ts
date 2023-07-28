import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
enum PaymentEnum {
  MercadoPago = "MercadoPago",
  PayPal = "PayPal"
}

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
<<<<<<< HEAD
  id: number;

=======
  id!: number;

<<<<<<< HEAD
  @Column()
  type!: string;
=======
>>>>>>> main
  @Column({
    type: "enum",
    enum: PaymentEnum
  })
  name: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> f9b3515 (transactions)
>>>>>>> main
}
