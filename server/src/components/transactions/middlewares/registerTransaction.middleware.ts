// import { NextFunction, Request, Response } from "express";
// import { ClientError } from "../../../utils/errors";
// import response from "../../../utils/response";
// import Exchange from "../../../services/Exchange";
// import TransactionHistoryService from "src/components/transactionHistories/services";

// export default async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     await TransactionHistoryService.createTransactionHistory({date: new Date(), })
//     next();
//   } catch (error: any) {
//     return response(res, error.statusCode, error.message, true);
//   }
// };

// @Column()
// date!: Date;s

// @Column()
// transactionId!: number;

// @ManyToOne(() => Account, (account) => account.id)
// accounts!: Account[];

// @ManyToOne(() => Transaction, (transaction) => transaction.id)
// transaction!: Transaction;
// }
