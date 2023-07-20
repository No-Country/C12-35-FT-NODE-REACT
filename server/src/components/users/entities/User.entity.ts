import { Column, Entity, PrimaryGeneratedColumn, OneToOne, Unique, JoinColumn } from "typeorm";
import { Account } from "../../accounts/entities/Account.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  local_address!: string;

  @Column({ nullable: true })
  postal_code!: string;

  @Column({ nullable: true })
  phone_number!: string;

  @Column({ nullable: true })
  profile_picture!: string;

  @Column({ nullable: true })
  country!: string;

  @Column({ nullable: true })
  document_type!: string;

  @Column({ nullable: true })
  document_number!: string;

  @Column({ nullable: true })
  birthdate!: Date;

  @Column({ default: false })
  verified_phone: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ nullable: true })
  first_name!: string;

  @Column({ nullable: true })
  last_name!: string;
}
