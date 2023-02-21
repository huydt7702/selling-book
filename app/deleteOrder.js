import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";
import OrderDetailsService from "./services/OrderDetailsService";
import OrderService from "./services/OrderService";

$(document).ready(function () {
  const orderService = new OrderService(FirebaseConstants.RealTimeDB, "Token");
  const orderDetailsService = new OrderDetailsService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();

  const orderId = urlHelper.readParam(url, "orderId");
  const orderDetailsId = urlHelper.readParam(url, "orderDetailsId");

  const handleDeleteOrder = async () => {
    await orderService.deleteOrder(orderId);
    await orderDetailsService.deleteOrderDetails(orderDetailsId);

    location.href = "listOrders.html";
  };

  handleDeleteOrder();
});
