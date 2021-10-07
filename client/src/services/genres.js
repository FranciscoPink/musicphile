import api from "./api-config";

export const getGenres = async () => {
  const res = await api.get("/genres");
  return res.data;
}

export const getGenre = async id => {
  const res = await api.get(`/genres/${id}`);
  return res.data;
}

