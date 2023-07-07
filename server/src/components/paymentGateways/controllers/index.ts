import getPaymentGateway from "./getPaymentGatewaycontroller";

import utils from "../../../utils";

export default {
  getPaymentGateway: utils.catched(getPaymentGateway)
};
