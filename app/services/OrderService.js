import axios from "axios";

class OrderService {
  constructor(realtimeDb, accessToken) {
    this.collectionName = "orders.json";
    this.realtimeDb = realtimeDb;
    this.accessToken = accessToken;
  }

  insertOrder = async (entity) => {
    const response = await axios.post(this.realtimeDb + this.collectionName, entity);
    const insertedId = await response.data.name;

    return insertedId;
  };

  updateCategory = async (id, entity) => {
    const response = await axios.put(`${this.realtimeDb}categories/${id}.json`, entity);
    return response.data;
  };

  deleteOrder = async (id) => {
    const response = await axios.delete(`${this.realtimeDb}orders/${id}.json`);
    return response.data;
  };

  findById = async (id) => {
    const response = await axios.get(`${this.realtimeDb}categories/${id}.json`);
    return response.data;
  };

  findAllOrders = async (entity) => {
    const response = await axios.get(this.realtimeDb + this.collectionName);
    return response.data;
  };
}

export default OrderService;
