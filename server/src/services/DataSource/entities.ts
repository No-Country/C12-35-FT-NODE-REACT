import { User } from "../../components/User/entities/User.entity";
import { Account } from "../../components/Account/entities/Account.entity";
import { Transaction } from "../../components/Transaction/entities/Transaction.entity";
import { History } from "../../components/History/entities/History.entity";
import { PaymentGateway } from "../../components/PaymentGateway/entities/PaymentGateway.entity";
import { Card } from "../../components/Card/entities/Card.entity";

export const entities = [User, Account, Card, Transaction, History, PaymentGateway];
