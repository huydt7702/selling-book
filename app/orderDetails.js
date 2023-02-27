import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import OrderService from "./services/OrderService";
import UrlHelper from "./helpers/UrlHelper";
import OrderDetailsService from "./services/OrderDetailsService";
import ProductService from "./services/ProductService";

$(document).ready(function () {
  const orderDetailsService = new OrderDetailsService(FirebaseConstants.RealTimeDB, "Token");
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();
  const id = urlHelper.readParam(url, "id");

  try {
    orderDetailsService.findAllOrderDetails().then((data) => {
      const placeholder = $("#placeholder");
      let list = "";

      for (const key in data) {
        const element = data[key];
        const { orderId, productIds, quantity, unitPrice } = element;

        if (orderId === id) {
          list = `
            <tr>
              <td>
                <ol>
                  ${productIds.map((id) => `<li>Xem sản phẩm: <a href="product.html?id=${id}">${id}</a></li>`).join("")}
                </ol>
              </td>
              <td>${quantity}</td>
              <td>${unitPrice} VNĐ</td>
              <td>
                <a style="color: red" href="deleteOrder.html?orderId=${orderId}&orderDetailsId=${key}" onclick="return confirm('Bạn có muốn xóa đơn hàng này không?')"><i class="fa fa-pencil" aria-hidden="true"></i> Xóa đơn hàng </a>
              </td>
            </tr>
        `;
        }
      }
      placeholder.append(list);
    });
  } catch (error) {
    console.log(error);
  }
});
