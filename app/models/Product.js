export default class Product {
  constructor(categoryId, productId, name, description, price, quantity, image) {
    this.categoryId = categoryId;
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
}
