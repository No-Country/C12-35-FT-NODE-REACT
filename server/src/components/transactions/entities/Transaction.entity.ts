import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { PaymentGateway } from "../../paymentGateways/entities/PaymentGateway.entity";
import { TransactionHistory } from "../../transactionHistories/entities/TransactionHistory.entity";

enum CurrencyEnum {
  ARS = "ARS",
  USD = "USD"
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({
    type: "enum",
    enum: CurrencyEnum,
    default: CurrencyEnum.ARS
  })
  currency: CurrencyEnum;

  @Column()
  date: Date;

  @ManyToOne(() => TransactionHistory, (transaction_history) => transaction_history.transactions)
  // @JoinColumn({ name: "trasaction_transactionhistory" })
  transaction_history: TransactionHistory;

  @ManyToOne(() => PaymentGateway, (paymentGateway) => paymentGateway.transactions)
  // @JoinColumn({ name: "trasaction_payment" })
  payment: PaymentGateway;
}
