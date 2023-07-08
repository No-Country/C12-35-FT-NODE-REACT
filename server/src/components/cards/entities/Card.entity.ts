import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  bank_branding!: string;

  @Column({ type: "varchar" })
  card_number!: number;

  @Column()
  cardholder_name!: string;

  @Column()
  expiration_date!: string;

  @Column()
  cvv!: number;

  @Column()
  payment_network!: string;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: "account_id" })
  account_id!: number;
}
//agegar la relacion con acounts obtener el account id
