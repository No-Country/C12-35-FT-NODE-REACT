import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Transaction } from "../../transactions/entities/Transaction.entity";

@Entity()
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.id)
  transaction!: Transaction[];
}
