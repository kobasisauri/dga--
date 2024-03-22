import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = await localStorage.getItem("token");

    if (token) {
      if (request.headers) {
        request.headers.Authorization = `Bearer ${token}`;
      }
    }
    return request;
  },
  (error) => Promise.reject({ ...error })
);

const onResponseFulfilled = (response: AxiosResponse) => response;

axiosInstance.interceptors.response.use((response) =>
  onResponseFulfilled(response)
);

export default axiosInstance;
