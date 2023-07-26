import axios from "axios";

async function getPrice() {
  const res = await axios("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
  return res.data;
}

class ExchangeService {
  async getDolarPrice(dolar = "oficial") {
    try {
      if (dolar === "oficial") {
        const data = await getPrice();
        console.log(data[1].casa);
        return data[1].casa;
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export default new ExchangeService();
