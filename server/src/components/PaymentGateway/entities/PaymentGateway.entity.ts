import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
}
