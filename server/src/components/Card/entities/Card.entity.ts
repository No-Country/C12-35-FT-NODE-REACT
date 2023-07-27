import { Column, Entity, ManyToOne, PrimaryColumn, Generated } from "typeorm";
import { Account } from "../../Account/entities/Account.entity";

@Entity()
export class Card {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

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
}
