import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://urban-nest-deploy.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
