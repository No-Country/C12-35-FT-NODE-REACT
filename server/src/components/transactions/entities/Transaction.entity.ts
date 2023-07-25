import { Column, Entity, ManyToOne, PrimaryColumn, Generated } from "typeorm";
import { History } from "../../transactionHistories/entities/History.entity";

@Entity()
export class Transaction {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  amount: number;

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
>>>>>>> 3147737 (.)
}
