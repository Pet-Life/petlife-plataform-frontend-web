import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.14:5000/api/v1/",
});

export default api;
