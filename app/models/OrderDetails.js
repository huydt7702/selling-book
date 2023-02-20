export default class OrderDetails {
  constructor(orderDetailsId, orderId, productIds, quantity, unitPrice) {
    this.orderDetailsId = orderDetailsId;
    this.orderId = orderId;
    this.productIds = productIds;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}
