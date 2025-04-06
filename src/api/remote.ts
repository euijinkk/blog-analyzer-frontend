import axios from "axios";

const isDevelopment = import.meta.env.MODE === "development";

const baseUrl = isDevelopment
  ? "http://localhost:8787"
  : "https://blog-ai-analyzer.euijinkk97.workers.dev";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
});

export default api;
