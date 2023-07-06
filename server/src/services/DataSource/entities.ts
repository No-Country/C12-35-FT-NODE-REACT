import { User } from "../../components/users/entities/User.entity";
import { Account } from "../../components/accounts/entities/Account.entity";
import { Transaction } from "../../components/transactions/entities/Transaction.entity";
import { TransactionHistory } from "../../components/transactionHistories/entities/TransactionHistory.entity";
import { PaymentGateway } from "../../components/paymentGateways/entities/PaymentGateway.entity";

export const entities = [User, Account, Transaction, TransactionHistory, PaymentGateway];
