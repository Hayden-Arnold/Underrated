import api from "./apiConfig";

export const getArtists = async () => {
  try {
    const response = await api.get("/artist");
    return response.data;
  } catch (error) {
    throw error;
  }
};