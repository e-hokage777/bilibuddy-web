import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30 * 1000, // timeout in 30 seconds
  headers: { "X-Custom-Header": "foobar" },
});

/// request interceptors
api.interceptors.request.use(
  async (config) => {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token");
    if (token) {
      config.headers!.Authorization = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/// response interceptors
// Add a response interceptor
api.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.data.detail) {
        return Promise.reject(
          new AxiosError(error.response.data.detail, error.response.status)
        );
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      return Promise.reject(new AxiosError("Something went wrong"));
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error);
    }
  }
);

export default api;
