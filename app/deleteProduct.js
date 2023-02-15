import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";
import ProductService from "./services/ProductService";

$(document).ready(function () {
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();

  const id = urlHelper.readParam(url, "id");

  productService.deleteProduct(id).then((data) => {
    location.href = "listProducts.html";
  });
});
