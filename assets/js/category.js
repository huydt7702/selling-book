import FirebaseConstants from "../../app/constants/FirebaseConstants";
import CategoryService from "../../app/services/CategoryService";
import ProductService from "../../app/services/ProductService";

// lọc sản phẩm theo tên

let catSelect = document.getElementById("categorySelect");
let nameSelect = document.getElementById("productNameSelect");
let cickBtnSelect = document.getElementsByClassName("header__search-btn")[0];
// lọc sản phẩm theo phân loại
catSelect.onchange = function () {
  // lựa chọn được select
  let selectId = this.value;
  for (let i = 1; i < 4; i++) {
    let id = "category" + i;
    if (selectId == i) {
      document.getElementById(id).style.display = "block";
    } else document.getElementById(id).style.display = "none";
  }
};

cickBtnSelect.onclick = function () {
  let productName = document.getElementsByClassName("product__panel-link");
  for (i = 0; i < productName.length; i++) {
    if (productName[i].textContent == nameSelect.value) {
      alert(productName[i].textContent);
      return;
    }
  }
  alert("Sản phẩm không có trong thư mục");
};
nameSelect.onchange = function () {
  let productName = document.getElementsByClassName("product__panel-link");
  for (i = 0; i < productName.length; i++) {
    if (productName[i].textContent == nameSelect.value) {
      alert(productName[i].textContent);
      return;
    }
  }
  alert("Sản phẩm không có trong thư mục");
};
// bấm vào header hiện danh mục tương ứng
let headernavSearch = document.getElementsByClassName("header__nav-item");
headernavSearch.ondbclick = function () {
  let headernavSearch = document.getElementsByClassName("header__nav-item");
  let searchId = this.value;
  for (let i = 1; i < 4; i++) {
    let id = "category" + i;
    if (searchId == i) {
      document.getElementById(id).style.display = "block";
    } else document.getElementById(id).style.display = "none";
  }
};
// tạm thời chưa chạy , có thời gian sẽ sửa sau

// ---------------------------------------------

$(document).ready(function () {
  const amountOrdersElement = $(".header__notice")[0];
  const getAmountOrders = () => {
    const listProductInfo = JSON.parse(localStorage.getItem("cart")) ?? [];
    amountOrdersElement.innerText = listProductInfo.length;
  };

  getAmountOrders();

  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  try {
    const fetchApi = async () => {
      const allProducts = await productService.findAllProducts();
      const allCategories = await categoryService.findAllCategories();

      const vietnameseBookBlock = $(".vietnameseBookBlock");
      let vietnameseBookList = "";

      const foreignBookBlock = $(".foreignBookBlock");
      let foreignBookList = "";

      const mangaBookBlock = $(".mangaBookBlock");
      let mangaBookList = "";

      for (const key in allCategories) {
        const { name } = allCategories[key];

        for (const productKey in allProducts) {
          const { categoryId, image, price, name: productName } = allProducts[productKey];

          if (key === categoryId && name === "Sách Tiếng Việt") {
            vietnameseBookList += `
            <div class="product__panel-item col-lg-2 col-md-3 col-sm-6">
            <div class="product__panel-img-wrap">
                <img src=${image} alt=${productName} class="product__panel-img">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${productKey}"  class="product__panel-link">${productName}</a>
            </h3>
            <div class="product__panel-rate-wrap">
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
            </div>

            <div class="product__panel-price">
                <span class="product__panel-price-old product__panel-price-old-hide">
                    80.000đ
                </span>
                <span class="product__panel-price-current">
                    ${price}
                </span>
            </div>  
        </div>
            `;
          }

          if (key === categoryId && name === "Sách Nước Ngoài") {
            foreignBookList += `
            <div class="product__panel-item col-lg-2 col-md-3 col-sm-6">
            <div class="product__panel-img-wrap">
                <img src=${image} alt=${productName} class="product__panel-img" style="height: 100%">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${productKey}"  class="product__panel-link">${productName}</a>
            </h3>
            <div class="product__panel-rate-wrap">
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
            </div>

            <div class="product__panel-price">
                <span class="product__panel-price-old product__panel-price-old-hide">
                    80.000đ
                </span>
                <span class="product__panel-price-current">
                    ${price}
                </span>
            </div>  
        </div>
            `;
          }

          if (key === categoryId && name === "Manga - Comics") {
            mangaBookList += `
            <div class="product__panel-item col-lg-2 col-md-3 col-sm-6">
            <div class="product__panel-img-wrap">
                <img src=${image} alt=${productName} class="product__panel-img" style="height: 100%">
            </div>
            <h3 class="product__panel-heading">
                <a href="product.html?id=${productKey}"  class="product__panel-link">${productName}</a>
            </h3>
            <div class="product__panel-rate-wrap">
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
                <i class="fas fa-star product__panel-rate"></i>
            </div>

            <div class="product__panel-price">
                <span class="product__panel-price-old product__panel-price-old-hide">
                    80.000đ
                </span>
                <span class="product__panel-price-current">
                    ${price}
                </span>
            </div>  
        </div>
            `;
          }
        }
      }

      vietnameseBookBlock.append(vietnameseBookList);
      foreignBookBlock.append(foreignBookList);
      mangaBookBlock.append(mangaBookList);
    };

    fetchApi();
  } catch (error) {
    console.log(error);
  }

  // try {
  //   categoryService.findAllCategories().then((data) => {
  //     const placeholder = $(".listProductsByCategory");
  //     let list = "";
  //     for (const key in data) {
  //       const element = data[key];
  //       const { name } = element;
  //       console.log(element);

  //       // list += `
  //       //   <tr>
  //       //     <td>${key}</td>
  //       //     <td>${name}</td>
  //       //     <td>
  //       //       <a style="color: blue" href="editCategory.html?id=${key}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit </a> |
  //       //       <a style="color: red" href="deleteCategory.html?id=${key}"><i class="fa fa-trash" aria-hidden="true"></i> Delete </a>
  //       //     </td>
  //       //   </tr>
  //       // `;
  //     }
  //     // placeholder.append(list);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
});
