import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "https://64f6e35b9d7754084952b88c.mockapi.io/",
});

export default axiosIntance;
