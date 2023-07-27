import { Column, Entity, ManyToOne, PrimaryColumn, Generated, OneToOne, JoinColumn } from "typeorm";
import { PaymentGateway } from "../../../components/PaymentGateway/entities/PaymentGateway.entity";
import { Account } from "../../../components/Account/entities/Account.entity";

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

  @OneToOne(() => PaymentGateway)
  @JoinColumn()
  paymentGateway: PaymentGateway;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
}
