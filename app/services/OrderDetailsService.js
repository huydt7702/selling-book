import axios from "axios";

class OrderDetailsService {
  constructor(realtimeDb, accessToken) {
    this.collectionName = "order_details.json";
    this.realtimeDb = realtimeDb;
    this.accessToken = accessToken;
  }

  insertOrderDetails = async (entity) => {
    const response = await axios.post(this.realtimeDb + this.collectionName, entity);
    const insertedId = await response.data.name;

    return insertedId;
  };

  updateCategory = async (id, entity) => {
    const response = await axios.put(`${this.realtimeDb}categories/${id}.json`, entity);
    return response.data;
  };

  deleteOrderDetails = async (id) => {
    const response = await axios.delete(`${this.realtimeDb}order_details/${id}.json`);
    return response.data;
  };

  findById = async (id) => {
    const response = await axios.get(`${this.realtimeDb}order_details/${id}.json`);
    return response.data;
  };

  findAllOrderDetails = async (entity) => {
    const response = await axios.get(this.realtimeDb + this.collectionName);
    return response.data;
  };
}

export default OrderDetailsService;
