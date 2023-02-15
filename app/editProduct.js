import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";
import Product from "./models/Product";
import CategoryService from "./services/CategoryService";
import ProductService from "./services/ProductService";

$(document).ready(function () {
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();

  const id = urlHelper.readParam(url, "id");
  const productIdCrl = $("#productId");
  const nameCrl = $("#name");
  const categoryIdCrl = $("#categoryId");
  const quantityCrl = $("#quantity");
  const priceCrl = $("#price");
  const descriptionCrl = $("#description");
  const imageCrl = $("#image");

  productService.findById(id).then((data) => {
    const { categoryId, description, name, price, quantity, image } = data;

    productIdCrl.val(id);
    nameCrl.val(name);
    quantityCrl.val(quantity);
    priceCrl.val(price);
    descriptionCrl.val(description);
    imageCrl.val(image);

    categoryService.findAllCategories().then((data) => {
      let list = "";
      for (const key in data) {
        const element = data[key];
        const { name } = element;
        list += `<option ${categoryId === key ? "selected" : ""} value=${key}>${name}</option>`;
      }

      categoryIdCrl.append(list);
    });
  });

  $("#update").on("click", () => {
    const product = new Product(
      categoryIdCrl.val(),
      productIdCrl.val(),
      nameCrl.val(),
      descriptionCrl.val(),
      priceCrl.val(),
      quantityCrl.val(),
      imageCrl.val()
    );

    try {
      productService.updateProduct(id, product).then((data) => {
        location.href = "listProducts.html";
      });
    } catch (error) {
      console.log(error);
    }
  });
});
