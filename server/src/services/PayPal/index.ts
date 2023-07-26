import { PAYPAL_CLIENT_ID, PAYPAL_SECRET_KEY, HOST, PAYPAL_API } from "../../config/envs";
import axios from "axios";

class PayPalService {
  async getToken(): Promise<string | null> {
    try {
      const url = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
      const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_KEY}`).toString("base64");
      const data = "grant_type=client_credentials";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${auth}`
      };

      const response = await axios.post(url, data, {
        headers
      });
      return response.data.access_token;
    } catch (error: any) {
      throw new Error("Error while getting the token:" + error.response?.data || error.message);
    }
  }

  async createOrder(currency: string, amount: string) {
    try {
      const token = await this.getToken();
      console.log(token);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };

      const data = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: amount
            }
          }
        ],
        application_context: {
          brand_name: "Fund Wave",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: `${HOST}/paypal/capture-order`,
          cancel_url: `${HOST}/paypal/cancel-order`
        }
      };

      const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, data, { headers });

      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async captureOrder(url: string) {
    try {
      const token = await this.getToken();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      const response = await axios.post(url, {}, { headers });

      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default new PayPalService();
