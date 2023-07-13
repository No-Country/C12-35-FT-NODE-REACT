import DB from "../../../services/DataSource";
import { Transaction } from "../entities/Transaction.entity";

export default new DB(Transaction);
