import { Column, Entity, ManyToOne, PrimaryColumn, Generated, OneToOne, JoinColumn } from "typeorm";
import { History } from "../../transactionHistories/entities/History.entity";
import { PaymentGateway } from "../../../components/paymentGateways/entities/PaymentGateway.entity";

enum CurrencyEnum {
  ARS = "ARS",
  USD = "USD"
}

enum typeEnum {
  ADD = "ADD",
  SEND = "SEND",
  TRANSFER = "TRANSFER"
}

@Entity()
export class Transaction {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

  @Column()
  amount: number;

  @Column({
    type: "enum",
    enum: typeEnum
  })
  type: string;

  @Column({
    type: "enum",
    enum: CurrencyEnum,
    default: CurrencyEnum.ARS
  })
  currency: CurrencyEnum;

  @Column()
  date: Date;

  @ManyToOne(() => History, (history) => history.transactions)
  history: History;

  @OneToOne(() => PaymentGateway)
  @JoinColumn()
  paymentGateway: PaymentGateway;
}
