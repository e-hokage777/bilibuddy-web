import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
