import { Column, Entity, ManyToOne, PrimaryColumn, Generated } from "typeorm";
import { History } from "../../transactionHistories/entities/History.entity";

enum CurrencyEnum {
  ARS = "ARS",
  USD = "USD"
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
    enum: CurrencyEnum,
    default: CurrencyEnum.ARS
  })
  currency: CurrencyEnum;

  @Column()
  date: Date;

  @ManyToOne(() => History, (history) => history.transactions)
  history: History;
}
