import { Column, Entity, PrimaryGeneratedColumn, OneToOne, Unique, JoinColumn } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  verified_phone: string;

  @Column({ default: false })
  verified: boolean;
}
