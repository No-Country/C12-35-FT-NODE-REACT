import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn, Generated } from "typeorm";
import { PaymentGateway } from "../../paymentGateways/entities/PaymentGateway.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";

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
}
