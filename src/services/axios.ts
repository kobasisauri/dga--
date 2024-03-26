import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const user = await JSON.parse(localStorage.getItem("user") || "{}");

    if (user) {
      if (request.headers) {
        request.headers.Authorization = `Bearer ${user.token}`;
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
