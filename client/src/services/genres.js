import api from "./api-config";

export const getGenres = async () => {
  const res = await api.get("/genres");
  return res.data;
}