import "regenerator-runtime/runtime";

import Product from "./models/Product";
import CategoryService from "./services/CategoryService";
import ProductService from "./services/ProductService";
import FirebaseConstants from "./constants/FirebaseConstants";

$(document).ready(function () {
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  const categoryIdCrl = $("#categoryId");
  categoryService.findAllCategories().then((data) => {
    let list = "";

    for (const key in data) {
      const element = data[key];

      const { name } = element;
      list += `<option value="${key}">${name}</option>`;
    }

    categoryIdCrl.append(list);
  });

  $("#save").on("click", () => {
    const productIdCrl = $("#productId");
    const name = $("#name").val();
    const price = $("#price").val();
    const quantity = $("#quantity").val();
    const description = $("#description").val();
    const image = $("#image").val();

    const product = new Product(categoryIdCrl.val(), null, name, description, price, quantity, image);

    try {
      productService.insertProduct(product).then((data) => {
        productIdCrl.val(data);
        location.href = "listProducts.html";
      });
    } catch (error) {
      console.log(error);
    }
  });
});
