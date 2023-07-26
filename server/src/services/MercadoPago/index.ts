import mercadopago from "mercadopago";
import { MERCADOPAGO_TOKEN } from "../../config/envs";
import { HOST } from "../../config/envs";

const access_token = MERCADOPAGO_TOKEN;
mercadopago.configure({
  access_token
});
class MercadoPago {
  async createPayment(amount: number, description: string, email: string, token: string) {
    const payload = {
      transaction_amount: amount,
      description: description,
      payment_method_id: "visa",
      installments: 1,
      payer: {
        email
      },
      token
    };
    return await mercadopago.payment.save(payload);
  }

  async getPayment(paymentId: any) {
    return await mercadopago.payment.get(parseInt(paymentId));
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
          id: "1",
          title: "Transferencia a cuenta",
          unit_price: amount,
          quantity: 1,
          currency_id: "ARS"
        }
      ],
      payer: {
        email: email
      },
      payment_methods: {
        installments: 1
      },
      back_urls: {
        success: `${HOST}/mercadopago/success`,
        failure: `${HOST}/mercadopago/failure`,
        pending: `${HOST}/mercadopago/pending`
      },
      auto_return: "approved",
      notification_url: `${HOST}/mercadopago/webhook`
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
}
export default new MercadoPago();
