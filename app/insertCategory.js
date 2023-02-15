import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import Category from "./models/Category";
import CategoryService from "./services/CategoryService";

$(document).ready(function () {
  $("#save").on("click", () => {
    const categoryIdCrl = $("#categoryId");
    const name = $("#name").val();

    const cate = new Category(null, name);
    const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");

    try {
      categoryService.insertCategory(cate).then((data) => {
        categoryIdCrl.val(data);
        location.href = "listCategories.html";
      });
    } catch (error) {
      console.log(error);
    }
  });
});
