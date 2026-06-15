import api from "./api";
import { getToken } from "./authService";

export const createDevis = async (data) => {
  const response = await api.post(
    "/devis",
    data
  );

  return response.data;
};

export const getDevis = async () => {
  const response = await api.get(
    "/devis",
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};