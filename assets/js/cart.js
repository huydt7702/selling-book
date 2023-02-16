import "regenerator-runtime/runtime";

$(document).ready(function () {
  const listCartBlock = $(".listCartBlock")[0];
  const listCart = JSON.parse(localStorage.getItem("cart")) ?? [];

  const html = listCart
    .map((item) => {
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

          <a href="#">Xóa</a>
        </div>
      </article>
    `;
    })
    .join("");

  listCartBlock.innerHTML = html;
});
