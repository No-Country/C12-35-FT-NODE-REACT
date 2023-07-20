import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, ManyToMany } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";
import { PaymentGateway } from "../../paymentGateways/entities/PaymentGateway.entity";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  bank_branding: string;

  @Column({ type: "varchar" })
  card_number: number;

  @Column()
  cardholder_name: string;

  @Column()
  expiration_date: string;

  @Column()
  cvv: number;

  @ManyToOne(() => Account, (account) => account.cards)
  // @JoinColumn({ name: "card_account" })
  account: Account;

  @ManyToMany(() => PaymentGateway)
  @JoinColumn()
  payments: PaymentGateway[];
}
//agegar la relacion con acounts obtener el account id
