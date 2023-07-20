import { User } from "../../components/users/entities/User.entity";
import { Account } from "../../components/accounts/entities/Account.entity";
import { Transaction } from "../../components/transactions/entities/Transaction.entity";
import { History } from "../../components/transactionHistories/entities/History.entity";
import { PaymentGateway } from "../../components/paymentGateways/entities/PaymentGateway.entity";
import { Card } from "../../components/cards/entities/Card.entity";

export const entities = [User, Account, Card, Transaction, History, PaymentGateway];
