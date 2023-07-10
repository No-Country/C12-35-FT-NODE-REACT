import getPaymentGateway from "./getPaymentGateway.service";
import createPaymentGateway from "./createPaymentGateway.service";
import updatePaymentGateway from "./updatePaymentGateway.service";
import { PaymentGateway } from "../entities/PaymentGateway.entity";
import deletePaymentGateway from "./deletePaymentGateway.service";
import getPaymentGatewayById from "./getPaymentGatewayById.service";

class PaymentGatewayService {
  async getPaymentGateway() {
    const PaymentGateway = await getPaymentGateway();
    return PaymentGateway;
  }
  async getPaymentGatewayById(id: number) {
    const PaymentGateway = await getPaymentGatewayById(id);
    return PaymentGateway;
  }
  async createPaymentGateway(paymentGateway: PaymentGateway) {
    const newPaymentGateway = await createPaymentGateway(paymentGateway);
    return newPaymentGateway;
  }
  async updatePaymentGateway(id: number, paymentGateway: PaymentGateway) {
    const updatedPaymentGateway = await updatePaymentGateway(id, paymentGateway);
    return updatedPaymentGateway;
  }
  async deletePaymentGateway(id: number) {
    const deletedPaymentGateway = await deletePaymentGateway(id);
    return deletedPaymentGateway;
  }
}

export default new PaymentGatewayService();
