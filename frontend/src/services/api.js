import axios from "axios";

export const apiURL = 'http://localhost:3000'
const api = axios.create({
  baseURL: apiURL,
});

export function setToken(token) {
  api.defaults.headers.Authorization = token
}

export default api;
