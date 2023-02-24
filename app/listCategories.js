import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import CategoryService from "./services/CategoryService";

$(document).ready(function () {
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");

  try {
    categoryService.findAllCategories().then((data) => {
      const placeholder = $("#placeholder");
      let list = "";
      for (const key in data) {
        const element = data[key];
        const { name } = element;

        list += `
          <tr>
            <td>${key}</td>
            <td>${name}</td>
            <td>
              <a style="color: blue" href="editCategory.html?id=${key}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit </a> |
              <a style="color: red" href="deleteCategory.html?id=${key}" onclick="return confirm('Bạn có muốn xóa danh mục này không?')"><i class="fa fa-trash" aria-hidden="true"></i> Delete </a>
            </td>
          </tr>
        `;
      }
      placeholder.append(list);
    });
  } catch (error) {
    console.log(error);
  }
});
