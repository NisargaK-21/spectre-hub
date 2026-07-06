import axios from "axios";

const api = axios.create({
  baseURL: "https://spectre-hub-backend.onrender.com/api",
});

export default api;