import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { PaymentGateway } from "../../paymentGateways/entities/PaymentGateway.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @ManyToOne(() => TransactionHistory, (transaction_history) => transaction_history.id)
  // @JoinColumn({ name: "trasaction_transactionhistory" })
  transaction_history: TransactionHistory;

  @ManyToOne(() => PaymentGateway, (paymentGateway) => paymentGateway.id)
  // @JoinColumn({ name: "trasaction_payment" })
  payment: PaymentGateway;
}
