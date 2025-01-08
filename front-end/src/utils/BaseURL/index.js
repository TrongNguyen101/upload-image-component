import axios from "axios";

const request = axios.create({
  baseURL: "https://localhost:7249/",
});

export default request;
