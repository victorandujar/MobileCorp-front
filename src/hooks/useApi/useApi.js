import apiClient from "../../api/apiClient";
import endpoints from "../../api/endpoints";

const useApi = () => {
  const { products } = endpoints;
  const getMobilesData = async () => {
    const { data } = await apiClient.get(`${products}`);

    return data;
  };

  return { getMobilesData };
};

export default useApi;
