import api from "./apiConfig";

export const getSongs = async () => {
  try {
    const response = await api.get("/song");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSong = async (id) => {
  try {
    const response = await api.get(`/song/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postSong = async (songData) => {
  try {
    const response = await api.post("/song/", songData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putSong = async (id, songData) => {
  try {
    const response = await api.put(`/song/${id}/`, songData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSong = async (id) => {
  try {
    const response = await api.delete(`/song/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};