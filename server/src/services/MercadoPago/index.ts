import mercadopago from "mercadopago";

const access_token = "TEST-855293887125103-020701-4dc0d814b9aeb712ae30c7a14acfd4b1-1298391875";
mercadopago.configure({
  access_token
});
class MercadoPago {
  async createPayment(amount: number, description: string) {
    const payload = {
      transaction_amount: amount,
      description: description,
      payment_method_id: "visa",
      installments: 1,
      payer: {
        email: "hola@hotmail.com"
      },
      token: "ff8080814c11e237014c1ff593b57b4a"
    };
    return await mercadopago.payment.save(payload);
  }

  async getPayment(paymentId: number) {
    return await mercadopago.payment.get(paymentId);
  }
  async getPaymentByOrderId(orderId: string) {
    return await mercadopago.payment.search({
      qs: {
        external_reference: orderId
      }
    });
  }
  async getPaymentByOrderIdAndStatus(orderId: string, status: string) {
    return await mercadopago.payment.search({
      qs: {
        external_reference: orderId,
        status
      }
    });
  }
  async updatePayment(paymentId: number, status: any) {
    return await mercadopago.payment.update({
      id: paymentId,
      status
    });
  }
  async cancelPayment(paymentId: number) {
    return await mercadopago.payment.cancel(paymentId);
  }
  async refundPayment(paymentId: number) {
    return await mercadopago.payment.refund(paymentId);
  }
  async createPreference(amount: number, email: string) {
    return await mercadopago.preferences.create({
      items: [
        {
          title: "Transferencia a cuenta",
          unit_price: amount,
          quantity: 1,
          currency_id: "ARS"
        }
      ]
      // payer: {
      //   email: email
      // },
      // payment_methods: {
      //   installments: 1
      // }
      // back_urls: {
      //   success: "http://localhost:8000/success",
      //   failure: "http://localhost:8000/failure",
      //   pending: "http://localhost:8000/pending"
      // },
      // notification_url: "http://localhost:8000/webhook"
    });
  }
  async getPreference(preferenceId: string) {
    return await mercadopago.preferences.get(preferenceId);
  }
  async updatePreference(preferenceId: string, items: any) {
    return await mercadopago.preferences.update({
      id: preferenceId,
      items
    });
  }
  // async webhook(body: any) {
  //   return await mercadopago.webhook.parse(body);
  // }
}
export default new MercadoPago();
