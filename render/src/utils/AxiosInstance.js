import axios from "axios";

const githubAxiosInstance = axios.create({
  baseURL: process.env.GITHUB_API_URL,
});

export { githubAxiosInstance };
