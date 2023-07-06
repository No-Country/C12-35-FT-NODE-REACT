import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column()
  address!: string;

  @Column()
  local_address!: string;

  @Column()
  postal_code!: string;

  @Column()
  phone_number!: string;

  @Column()
  profile_picture!: string;

  @Column()
  country!: string;

  @Column()
  document_type!: string;

  @Column()
  document_number!: string;

  @Column()
  birthdate!: Date;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @OneToMany(() => Account, (account) => account.id)
  accounts!: Account[];
}
