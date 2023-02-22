import "regenerator-runtime/runtime";
import FirebaseConstants from "../../app/constants/FirebaseConstants";
import ProductService from "../../app/services/ProductService";
import CategoryService from "../../app/services/CategoryService";
import UrlHelper from "../../app/helpers/UrlHelper";

import banner1 from "../images1/banner/363488_final1511.jpg";
import banner2 from "../images1/banner/Gold_DongA_600X350.jpg";
import banner3 from "../images1/banner/megabook-glod600X350.png";
import banner4 from "../images1/banner/363107_05.jpg";
import banner5 from "../images1/banner/363104_06.jpg";
import banner6 from "../images1/banner/slider-right.png";

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

  const formatPrice = (number) => {
    return new Intl.NumberFormat().format(number);
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
                          ${formatPrice(price)}đ
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
                    ${formatPrice(price)}đ
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

  // Handle show products by category
  const url = location.href;
  const urlHelper = new UrlHelper();
  const cateId = urlHelper.readParam(url, "cateId");
  const priceOnUrl = urlHelper.readParam(url, "price");
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");

  const renderCategories = async () => {
    try {
      const data = await categoryService.findAllCategories();
      const listCategories = $(".menu__list");
      let list = `
      <li class="menu__item hover-background-color-none" style="display: flex;align-items: center; margin: 20px 0; background-color: #fff; border-radius: 999px; border: 1px solid #ef2317">
        <input type="number" class="inputSearchPrice" placeholder="Tìm kiếm sản phẩm theo giá" style="border-radius: 999px;flex: 1;padding: 4px 16px; font-size: 14px; outline: none; border: none;"/> 
        <a class="searchPriceBtn" style="color:#000;cursor: pointer; padding: 8px 10px; background-color: #fff; border-top-right-radius: 999px;border-bottom-right-radius: 999px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </a>
      </li>
      `;

      for (const key in data) {
        const element = data[key];
        const { name } = element;

        list += `
          <li class="menu__item ${key === cateId ? "menu__item--active" : ""}">
            <a 
              href="index.html?cateId=${key}" 
              class="menu__link" style="display: block;text-decoration: none;color: #000;font-size: 14px;padding: 10px;"
            >${name}
            </a>
          </li>
          `;
      }
      listCategories.append(list);

      $(".searchPriceBtn").on("click", () => {
        const searchPriceBtn = $(".searchPriceBtn")[0];
        searchPriceBtn.href = `index.html?price=${$(".inputSearchPrice").val()}`;
      });
    } catch (error) {
      console.log(error);
    }
  };
  renderCategories();

  const renderProductsByCategory = async () => {
    const listProductsByCategoryBlock = $(".listProductsByCategory")[0];
    const allProducts = await productService.findAllProducts();
    let listProductsByCategory = "";

    for (let key in allProducts) {
      const product = allProducts[key];

      if (product.categoryId === cateId) {
        listProductsByCategory += `
        <div class="product__panel-item col-lg-3 col-md-4 col-sm-6">
        <div class="product__panel-item-wrap">
            <div class="product__panel-img-wrap">
                <img height='100%' src=${product.image} alt=${product.name} class="product__panel-img">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${key}" class="product__panel-link">${product.name}</a>
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
                    ${formatPrice(product.price)}đ
                </span>
            </div>

            <div class="product__panel-price-sale-off">
              -11%
            </div>
        </div>
      </div>
        `;
      } else if (Number(product.price) <= Number(priceOnUrl)) {
        listProductsByCategory += `
        <div class="product__panel-item col-lg-3 col-md-4 col-sm-6">
        <div class="product__panel-item-wrap">
            <div class="product__panel-img-wrap">
                <img height='100%' src=${product.image} alt=${product.name} class="product__panel-img">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${key}" class="product__panel-link">${product.name}</a>
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
                    ${formatPrice(product.price)}đ
                </span>
            </div>

            <div class="product__panel-price-sale-off">
              -11%
            </div>
        </div>
      </div>
        `;
      }
    }

    if (listProductsByCategory === "") {
      listProductsByCategory = `
      <div class="row">
      <div class="slide__left col-lg-8 col-md-0 col-sm-0">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
              <!-- <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol> -->
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src=${banner1} class="d-block w-100" alt="banner1">
                  </div>
                  <div class="carousel-item">
                    <img src=${banner2} class="d-block w-100" alt="banner2">
                  </div>
                  <div class="carousel-item">
                    <img src=${banner3} class="d-block w-100" alt="banner3">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
          </div>
          <div class="slide__left-bottom">
              <div class="slide__left-botom-one">
                  <img src=${banner4} class="slide__left-bottom-one-img">
              </div>
              <div class="slide__left-bottom-two">
                  <img src=${banner5} class="slide__left-bottom-tow-img">
              </div>
          </div>
      </div>

      <div class="slide__right col-lg-4 col-md-0 col-sm-0">
          <img src=${banner6} class="slide__right-img">
      </div>
  </div>
      `;
    }

    listProductsByCategoryBlock.innerHTML = listProductsByCategory;
  };

  renderProductsByCategory();
});
