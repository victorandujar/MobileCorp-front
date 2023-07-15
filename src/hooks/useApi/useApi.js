import apiClient from "../../api/apiClient";
import endpoints from "../../api/endpoints";

const useApi = () => {
  const { products } = endpoints;

  const getMobilesData = async () => {
    const { data } = await apiClient.get(`${products}`);

    return data;
  };

  const getMobileData = async (productId) => {
    const { data } = await apiClient.get(`${products}/${productId}`);
    return data;
  };

  return { getMobilesData, getMobileData };
};

export default useApi;
