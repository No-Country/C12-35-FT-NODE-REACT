import { Column, Entity, ManyToOne, PrimaryColumn, Generated, OneToOne, JoinColumn } from "typeorm";
import { History } from "../../transactionHistories/entities/History.entity";
import { PaymentGateway } from "../../../components/paymentGateways/entities/PaymentGateway.entity";

<<<<<<< HEAD
=======
enum CurrencyEnum {
  ARS = "ARS",
  USD = "USD"
}

enum typeEnum {
  ADD = "ADD",
  SEND = "SEND",
  RECEIVE = "RECEIVE"
}

>>>>>>> f9b3515 (transactions)
@Entity()
export class Transaction {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

  @Column()
  type: string;

<<<<<<< HEAD
  @Column()
  amount: number;
=======
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
>>>>>>> f9b3515 (transactions)

  @Column()
  date: Date;

<<<<<<< HEAD
<<<<<<< HEAD
  @ManyToOne(() => TransactionHistory, (transaction_history) => transaction_history.id)
  // @JoinColumn({ name: "trasaction_transactionhistory" })
  transaction_history: TransactionHistory;

  @ManyToOne(() => PaymentGateway, (paymentGateway) => paymentGateway.id)
  // @JoinColumn({ name: "trasaction_payment" })
  payment: PaymentGateway;
=======
  @ManyToOne(() => TransactionHistory, (history) => history.transactions)
  history: TransactionHistory;
>>>>>>> 0f31e4f (transaciones)
=======
  @ManyToOne(() => History, (history) => history.transactions)
  history: History;
<<<<<<< HEAD
>>>>>>> 3147737 (.)
=======

  @OneToOne(() => PaymentGateway)
  @JoinColumn()
  paymentGateway: PaymentGateway;
>>>>>>> f9b3515 (transactions)
}
