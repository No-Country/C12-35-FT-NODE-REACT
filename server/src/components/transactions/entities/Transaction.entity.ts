import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";

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
}
