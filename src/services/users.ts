import { addUserType } from "./../types/user";
import axiosInstance from "./axios";

export const getAllUser = () => axiosInstance.get("/users");

export const addUsers = (data: addUserType) =>
  axiosInstance.post("users/add", data);

export const deleteUser = (id: number) => axiosInstance.delete(`users/${id}`);

export const editUsers = (id: number, data: addUserType) =>
  axiosInstance.put(`users/${id}`, data);
