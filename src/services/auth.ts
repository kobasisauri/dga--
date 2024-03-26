import axiosInstance from "./axios";
import { loginType } from "../types/user";

export const auth = (data: loginType) =>
  axiosInstance.post(`/auth/login`, data);
