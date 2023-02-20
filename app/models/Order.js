export default class Category {
  constructor(orderId, customerName, customerEmail, customerPhoneNumber, customerAddress, createdDate) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhoneNumber = customerPhoneNumber;
    this.customerAddress = customerAddress;
    this.createdDate = createdDate;
  }
}
