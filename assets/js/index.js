import "regenerator-runtime/runtime";
import FirebaseConstants from "../../app/constants/FirebaseConstants";
import ProductService from "../../app/services/ProductService";

//Get the button
var mybutton = document.getElementById("myBtn-scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// -------------------------------------

$(document).ready(function () {
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");
  const amountOrdersElement = $(".header__notice")[0];

  const getAmountOrders = () => {
    const listProductInfo = JSON.parse(localStorage.getItem("cart")) ?? [];
    amountOrdersElement.innerText = listProductInfo.length;
  };

  const getAllProducts = async () => {
    try {
      const data = await productService.findAllProducts();
      const listProducts = $(".row.product__panel");
      const listBestseller = $(".list-bestseller");

      let list = "";
      let listMostSeller = "";

      for (const key in data) {
        const element = data[key];
        const { image, name, price } = element;

        list += `
            <div class="product__panel-item col-lg-3 col-md-4 col-sm-6">
              <div class="product__panel-item-wrap">
                  <div class="product__panel-img-wrap">
                      <img height='100%' src=${image} alt=${name} class="product__panel-img">
                  </div>
                  <h3 class="product__panel-heading">
                      <a href="product.html?id=${key}" class="product__panel-link">${name}</a>
                  </h3>
                  <div class="product__panel-rate-wrap">
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                      <i class="fas fa-star product__panel-rate"></i>
                  </div>

                  <div class="product__panel-price">
                      <span class="product__panel-price-old">
                        20.000đ
                      </span>
                      <span class="product__panel-price-current">
                          ${price}
                      </span>
                  </div>

                  <div class="product__panel-price-sale-off">
                    -11%
                  </div>
              </div>
            </div>
        `;

        listMostSeller += `
            <div class="bestselling__product col-lg-4 col-md-6 col-sm-12">
            <div class="bestselling__product-img-box" style="display: flex; justify-content: center;">
                <img src=${image} style="height: 100%;" alt="Biểu tượng thất truyền" class="bestselling__product-img">
            </div>
            <div class="bestselling__product-text">
                <h3 class="bestselling__product-title">
                    <a href="#" class="bestselling__product-link">${name}</a>
                </h3>

                <div class="bestselling__product-rate-wrap">
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                    <i class="fas fa-star bestselling__product-rate"></i>
                </div>

                <span class="bestselling__product-price">
                    ${price}
                </span>

                <div class="bestselling__product-btn-wrap">
                    <a href="product.html?id=${key}" class="bestselling__product-btn" style="color: #fff;">Xem hàng</a>
                </div>
            </div>
        </div>
        `;
      }

      listProducts.append(list);
      listBestseller.append(listMostSeller);
    } catch (error) {
      console.log(error);
    }
  };

  getAllProducts();
  getAmountOrders();
});
