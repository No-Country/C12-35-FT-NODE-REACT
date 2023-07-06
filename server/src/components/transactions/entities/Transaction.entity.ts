import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";
import { PaymentGateway } from "../../paymentGateways/entities/PaymentGateway.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  amount!: number;

  @Column()
  date!: Date;

  @ManyToOne(() => Account, (account) => account.id)
  accounts!: Account[];

  @OneToMany(() => PaymentGateway, (paymentGateway) => paymentGateway.id)
  paymentGateway!: PaymentGateway[];
}
