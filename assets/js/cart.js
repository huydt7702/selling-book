import "regenerator-runtime/runtime";

$(document).ready(function () {
  const listCartBlock = $(".listCartBlock")[0];
  const totalCartPriceElement = $(".totalCartPrice")[0];
  const amountOrdersElement = $(".header__notice")[0];

  const getTotalPrice = () => {
    const listCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const total = listCart.reduce((total, product) => total + Number(product.price), 0);
    totalCartPriceElement.innerText = total + " VNĐ";
  };

  const getAmountOrders = () => {
    const listProductInfo = JSON.parse(localStorage.getItem("cart")) ?? [];
    amountOrdersElement.innerText = listProductInfo.length;
  };

  const renderListCart = () => {
    const listCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const html = listCart
      .map((item, index) => {
        return `
        <article class="row cart__body">
        <div class="col-6 cart__body-name">
          <div class="cart__body-name-img">
            <img src=${item.image} />
          </div>
          <a href="" style="margin-left: 10px;" class="cart__body-name-title"> ${item.title} </a>
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
      const listCart = JSON.parse(localStorage.getItem("cart")) ?? [];
      const newListCart = listCart.filter((item, index) => index !== Number(e.target.dataset.id));

      console.log(newListCart);
    };
  }
});
