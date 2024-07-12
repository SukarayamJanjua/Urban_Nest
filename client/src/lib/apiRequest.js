import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://urban-nest-api-delta.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;
