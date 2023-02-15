import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";
import Category from "./models/Category";
import CategoryService from "./services/CategoryService";

$(document).ready(function () {
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");

  const url = location.href;
  const urlHelper = new UrlHelper();

  const id = urlHelper.readParam(url, "id");
  const categoryIdCrl = $("#categoryId");
  const nameCrl = $("#name");

  categoryService.findById(id).then((data) => {
    const { name } = data;

    categoryIdCrl.val(id);
    nameCrl.val(name);
  });

  $("#update").on("click", () => {
    const cate = new Category(null, nameCrl.val());

    try {
      categoryService.updateCategory(categoryIdCrl.val(), cate).then((data) => {
        location.href = "listCategories.html";
      });
    } catch (error) {
      console.log(error);
    }
  });
});
