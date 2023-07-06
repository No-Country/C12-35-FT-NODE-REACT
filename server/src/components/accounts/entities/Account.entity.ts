import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "../../users/entities/User.entity";
import { Transaction } from "../../transactions/entities/Transaction.entity";
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  balance!: number;

  @Column()
  date_created!: Date;

  @Column()
  type!: string;

  @ManyToOne(() => User, (user) => user.id)
  users!: User[];

  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions!: Transaction[];
}
