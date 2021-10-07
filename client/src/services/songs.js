export const getSongs = async () => {
  const res = await api.get("/songs");
  return res.data;
}

export const getSong = async id => {
  const res = await api.get(`/songs/${id}`);
  return res.data;
}

export const createSong = async song => {
  const res = await api.post("/songs", song);
  return res.data;
}

export const updateSong = async (id, song) => {
  const res = await api.put(`/songs/${id}`, song);
  return res.data;
}

export const deleteSong = async id => {
  const res = await api.delete(`/songs/${id}`);
  return res.data;
}