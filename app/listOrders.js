import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import OrderService from "./services/OrderService";

$(document).ready(function () {
  const orderService = new OrderService(FirebaseConstants.RealTimeDB, "Token");

  try {
    orderService.findAllOrders().then((data) => {
      console.log(data);
      const placeholder = $("#placeholder");
      let list = "";
      for (const key in data) {
        const element = data[key];
        const { customerName, customerEmail, customerAddress, customerPhoneNumber, createdDate } = element;

        list += `
          <tr>
            <td>${customerName}</td>
            <td>${customerEmail}</td>
            <td>${customerAddress}</td>
            <td>${customerPhoneNumber}</td>
            <td>${createdDate}</td>
            <td>
              <a style="color: blue" href="orderDetails.html?id=${key}"><i class="fa fa-pencil" aria-hidden="true"></i> Xem chi tiết </a>
            </td>
          </tr>
        `;
      }
      placeholder.append(list);
    });
  } catch (error) {
    console.log(error);
  }
});
