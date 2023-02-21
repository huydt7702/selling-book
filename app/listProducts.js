import "regenerator-runtime/runtime";

import FirebaseConstants from "./constants/FirebaseConstants";
import ProductService from "./services/ProductService";
import CategoryService from "./services/CategoryService";

$(document).ready(function () {
  const productService = new ProductService(FirebaseConstants.RealTimeDB, "Token");
  const categoryService = new CategoryService(FirebaseConstants.RealTimeDB, "Token");

  const getAllProducts = async () => {
    try {
      const data = await productService.findAllProducts();
      const categories = await categoryService.findAllCategories();

      const placeholder = $("#placeholder");
      let list = "";
      for (const key in data) {
        const element = data[key];
        const { categoryId, description, image, name, price } = element;
        const category = categories[categoryId];

        list += `
          <tr>
            <td>${name}</td>
            <td>${category.name}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td><img src=${image} alt="Product width="80px" height="80px" /></td>
            <td style="width: 150px;">
              <a style="color: blue" href="editProduct.html?id=${key}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit </a> |
              <a style="color: red" href="deleteProduct.html?id=${key}"><i class="fa fa-trash" aria-hidden="true"></i> Delete </a>
            </td>
          </tr>
        `;
      }
      placeholder.append(list);
    } catch (error) {
      console.log(error);
    }
  };

  getAllProducts();
});
