import axios from "axios";
import { getFromDatabase } from "../../cards/services/cardApiService";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUsersFromServer = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/user`);

    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};
