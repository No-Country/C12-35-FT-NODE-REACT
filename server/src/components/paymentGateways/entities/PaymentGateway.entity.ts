import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Card } from "../../cards/entities/Card.entity";

enum PaymentEnum {
  MercadoPago = "MercadoPago",
  PayPal = "PayPal"
}

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: PaymentEnum
  })
  name: string;

  @ManyToMany(() => Card, (card) => card.payments)
  // @JoinColumn({ name: "payment_card" })
  cards: Card;
}
