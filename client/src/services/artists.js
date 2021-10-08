import api from "./api-config";

export const getArtists = async () => {
  const res = await api.get(`/artists}`);
  return res.data;
}