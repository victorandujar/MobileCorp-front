import axios from "axios";

const apiUrl = "https://itx-frontend-test.onrender.com/api";

const apiClient = axios.create({ baseURL: apiUrl });

export default apiClient;
