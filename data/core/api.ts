import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30 * 1000, // timeout in 30 seconds
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
