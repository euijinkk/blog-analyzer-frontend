import ky from "ky";

const isDevelopment = import.meta.env.MODE === "development";

const baseUrl = isDevelopment
  ? "http://localhost:8787"
  : "https://blog-ai-analyzer.euijinkk97.workers.dev";

console.log("baseUrl", baseUrl);

const api = ky.create({
  prefixUrl: baseUrl,
  timeout: 60000, // 60 seconds timeout for blog analysis
});

export default api;
