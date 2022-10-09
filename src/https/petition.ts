import http from "../utils/axios";
const path = "/petitions";
export const getMany = (params: string) => http.get(`${path}`);
export const getOne = (id: number) => http.get(`${path}/${id}`);
export const createOne = (id: number) => http.post(`${path}/${id}`);
export const updateOne = (id: number) => http.patch(`${path}/${id}`);
export const deleteOne = (id: number) => http.delete(`${path}/${id}`);
