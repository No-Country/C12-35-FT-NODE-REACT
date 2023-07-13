import getPaymentGateway from "./getPaymentGateway.controller";
import updatePaymentGateway from "./updatePaymentGateway.controller";
import deletePaymentGateway from "./deletePaymentGateway.controller";
import createPaymentGateway from "./createPaymentGateway.controller";
import getPaymentGatewayById from "./getPaymentGatewayById.controller";

import utils from "../../../utils";

export default {
  getPaymentGateway: utils.catched(getPaymentGateway),
  updatePaymentGateway: utils.catched(updatePaymentGateway),
  deletePaymentGateway: utils.catched(deletePaymentGateway),
  createPaymentGateway: utils.catched(createPaymentGateway),
  getPaymentGatewayById: utils.catched(getPaymentGatewayById)
};
