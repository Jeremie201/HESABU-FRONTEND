import api from "./api";
import { getToken } from "./authService";

export const sendContact = async (data) => {
  const response = await api.post(
    "/contact",
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await api.get(
    "/contact",
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};