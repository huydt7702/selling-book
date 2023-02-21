import "regenerator-runtime/runtime";
import Order from "../../app/models/Order";
import OrderService from "../../app/services/OrderService";
import FirebaseConstants from "../../app/constants/FirebaseConstants";
import OrderDetails from "../../app/models/OrderDetails";
import OrderDetailsService from "../../app/services/OrderDetailsService";

$(document).ready(function () {
  const listCartBlock = $(".listCartBlock")[0];
  const totalCartPriceElement = $(".totalCartPrice")[0];
  const amountOrdersElement = $(".header__notice")[0];
  const listCart = JSON.parse(localStorage.getItem("cart")) ?? [];

  const getTotalPrice = () => {
    const total = listCart.reduce((total, product) => total + Number(product.price), 0);
    totalCartPriceElement.innerText = total + " VNĐ";

    return total;
  };

  const getAmountOrders = () => {
    amountOrdersElement.innerText = listCart.length;
  };

  const renderListCart = () => {
    const html = listCart
      .map((item, index) => {
        return `
        <article class="row cart__body">
        <div class="col-6 cart__body-name">
          <div class="cart__body-name-img">
            <img src=${item.image} />
          </div>
          <a href="product.html?id=${item.id}" style="margin-left: 10px;" class="cart__body-name-title"> ${item.title} </a>
        </div>
        <div class="col-3 cart__body-quantity">
          <input type="button" value="-" class="cart__body-quantity-minus" />
          <input type="number" step="1" min="1" max="999" value="1" class="cart__body-quantity-total" />
          <input type="button" value="+" class="cart__body-quantity-plus" />
        </div>
        <div class="col-3 cart__body-price">
          <span>${item.price} VNĐ</span>

          <a style="color: #fff; cursor: pointer;" class="btnDeleteProduct" data-id=${index}>Xóa</a>
        </div>
      </article>
    `;
      })
      .join("");

    listCartBlock.innerHTML = html;
  };
  getAmountOrders();
  renderListCart();
  getTotalPrice();

  // Handle delete product
  const btnDeleteProduct = $(".btnDeleteProduct");
  for (let i = 0; i < btnDeleteProduct.length; i++) {
    btnDeleteProduct[i].onclick = function (e) {
      const newListCart = listCart.filter((item, index) => index !== Number(e.target.dataset.id));
      localStorage.setItem("cart", JSON.stringify(newListCart));
      location.reload();
    };
  }

  // Handle click button buy
  const buyButton = $(".buyButton")[0];
  buyButton.onclick = function (e) {
    e.preventDefault();
    const orderIdCrl = $("#orderId");
    const nameCrl = $("#name").val();
    const emailCrl = $("#email").val();
    const phoneNumberCrl = $("#phoneNumber").val();
    const addressCrl = $("#address").val();

    // get current date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    const order = new Order(null, nameCrl, emailCrl, phoneNumberCrl, addressCrl, currentDate);
    const orderService = new OrderService(FirebaseConstants.RealTimeDB, "Token");
    const orderDetailsService = new OrderDetailsService(FirebaseConstants.RealTimeDB, "Token");

    try {
      orderService.insertOrder(order).then((data) => {
        orderIdCrl.val(data);

        const productIds = listCart.map((item) => item.id);
        const orderDetails = new OrderDetails(null, data, productIds, listCart.length, getTotalPrice());
        orderDetailsService.insertOrderDetails(orderDetails).then((orderDetailsId) => {
          console.log(orderDetailsId);
        });

        localStorage.removeItem("cart");
        location.reload();

        alert("Đặt hàng thành công, cảm ơn quý khách.");
      });
    } catch (error) {
      console.log(error);
    }
  };
});
