import axios from "axios";

const apiClient = axios.create({ baseURL: process.env.REACT_APP_URL_API });

export default apiClient;
