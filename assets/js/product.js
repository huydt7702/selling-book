import "regenerator-runtime/runtime";

import FirebaseConstants from "../../app/constants/FirebaseConstants";
import ProductService from "../../app/services/ProductService";
import UrlHelper from "../../app/helpers/UrlHelper";

// Phần gửi kiểm tra form
let submitBtn = document.getElementById("formgroupcomment");
submitBtn.onsubmit = function (event) {
  event.preventDefault();
  let nameIn = document.getElementById("form-name");
  let commentIn = document.getElementById("pwd");
  let contentIn = document.getElementById("formcontent");

  //kiểm tra xem có đủ 100 ký tự hay k
  if ($("textarea#formcontent").val().length < 100) {
    alert("Bạn phải nhập  trên 100 ký tự");
    return;
  } else {
    // kiểm tra từ cấm
    let bWord = ["xấu", " hư ", " lỗi", "đểu"];
    for (i = 0; i < bWord.length; i++) {
      if ($("textarea#formcontent").val().toLowerCase().indexOf(bWord[i]) > -1) {
        alert("Có tồn tại từ cấm");
        return;
      }
    }
  }

  // lấy giờ
  var currentdate = new Date();
  var datetime =
    currentdate.getFullYear() +
    "-" +
    currentdate.getMonth() +
    "-" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  // thêm nội dung vào trang web

  let reviewer = document.getElementsByClassName(" item-reviewer")[0];
  var ul = document.createElement("ul");
  ul.innerHTML = `
<ul class = item-reviewer>
<div class="comment-item-user">
    <img src="https://i.pinimg.com/originals/83/9f/40/839f40f099e578577f8e775bf29ce8f0.jpg" alt="Muzan" class="comment-item-user-img">
    
    <li><b> ${nameIn.value} </b></li> 
 </div>

<br>
<li>${datetime}</li>
<li>
   <h4> ${contentIn.value}</h4>
</li>
</ul> `;
  reviewer.prepend(ul);
};

// ------------------------------------------

$(document).ready(function () {
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();

  const id = urlHelper.readParam(url, "id");
  const productInfoBlock = $(".productInfoBlock")[0];
  const amountOrdersElement = $(".header__notice")[0];

  const getAmountOrders = () => {
    const listProductInfo = JSON.parse(localStorage.getItem("cart")) ?? [];
    amountOrdersElement.innerText = listProductInfo.length;
  };

  getAmountOrders();

  productService.findById(id).then((data) => {
    const { description, image, name, price } = data;

    const productInfo = `
    <div class="product__main-img col-lg-4 col-md-4 col-sm-12">
    <div class="product__main-img-primary">
      <img src=${image} />
    </div>
  </div>

  <div class="product__main-info col-lg-8 col-md-8 col-sm-12">
    <div class="product__main-info-breadcrumb">Trang chủ / Sản phẩm</div>

    <a href="#" class="product__main-info-title">
      <h2 class="product__main-info-heading">${name}</h2>
    </a>

    <div class="product__main-info-rate-wrap">
      <i class="fas fa-star product__main-info-rate"></i>
      <i class="fas fa-star product__main-info-rate"></i>
      <i class="fas fa-star product__main-info-rate"></i>
      <i class="fas fa-star product__main-info-rate"></i>
      <i class="fas fa-star product__main-info-rate"></i>
    </div>

    <div class="product__main-info-price">
      <span class="product__main-info-price-current"> ${price} </span>
    </div>

    <div class="product__main-info-description">
      ${description}
    </div>

    <div class="product__main-info-cart">
      <div class="product__main-info-cart-btn-wrap">
        <button class="product__main-info-cart-btn">Thêm vào giỏ hàng</button>
      </div>
    </div>

    <div class="product__main-info-contact">
      <a href="#" class="product__main-info-contact-fb">
        <i class="fab fa-facebook-f"></i>
        Chat Facebook
      </a>
      <div class="product__main-info-contact-phone-wrap">
        <div class="product__main-info-contact-phone-icon">
          <i class="fas fa-phone-alt"></i>
        </div>

        <div class="product__main-info-contact-phone">
          <div class="product__main-info-contact-phone-title">Gọi điện tư vấn</div>
          <div class="product__main-info-contact-phone-number">( 0352.860.701)</div>
        </div>
      </div>
    </div>
  </div>
    `;
    productInfoBlock.innerHTML = productInfo;

    // Add product to cart
    const btnAddToCartElement = $(".product__main-info-cart-btn")[0];
    btnAddToCartElement.onclick = function () {
      const prodInfo = { title: name, image, price };
      const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

      localStorage.setItem("cart", JSON.stringify([...cart, prodInfo]));
      getAmountOrders();
    };
  });
});
