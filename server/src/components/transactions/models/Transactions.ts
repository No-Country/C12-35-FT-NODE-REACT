import { User } from "src/components/users/entities/User.entity";

export interface ITransaction {
  amount: number;
  type: string;
  date: Date;
  user?: User;
}
