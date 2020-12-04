import axios from "axios";

axios.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

export default axios;
