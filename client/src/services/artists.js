import api from "./api-config";

export const getArtist = async id => {
  const res = await api.get(`/artists/${id}`);
  return res.data;
}

export const createArtist = async artist => {
  const res = await api.post("/artists", artist);
  return res.data;
}