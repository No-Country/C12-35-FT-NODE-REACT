import { Column, Entity, ManyToOne, PrimaryColumn, Generated, OneToOne, JoinColumn } from "typeorm";
import { PaymentGateway } from "../../../components/PaymentGateway/entities/PaymentGateway.entity";
import { Account } from "../../../components/Account/entities/Account.entity";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
enum CurrencyEnum {
  ARS = "ARS",
  USD = "USD"
}

enum typeEnum {
  ADD = "ADD",
  SEND = "SEND",
  TRANSFER = "TRANSFER"
}

<<<<<<< HEAD
=======
>>>>>>> f9b3515 (transactions)
>>>>>>> main
@Entity()
export class Transaction {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

  @Column()
<<<<<<< HEAD
  amount: number;

=======
  type: string;

<<<<<<< HEAD
  @Column()
  amount: number;
=======
>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> f9b3515 (transactions)
>>>>>>> main

  @Column()
  date: Date;

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> main
  @OneToOne(() => PaymentGateway)
  @JoinColumn()
  paymentGateway: PaymentGateway;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
<<<<<<< HEAD
=======
>>>>>>> 7be6c0a (.)
>>>>>>> main
}
