import getPaymentGateway from "./getPaymentGateway.service";

class PaymentGatewayService {
  async getPaymentGateway() {
    const PaymentGateway = await getPaymentGateway();
    return PaymentGateway;
  }

  // async createUsers(newUser: User) {
  //   const userCreated = await createPaymentGateway(newUser);
  //   return userCreated;
  // }
}

export default new PaymentGatewayService();
