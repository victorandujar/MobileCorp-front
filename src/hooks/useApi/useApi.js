import { useContext } from "react";
import apiClient from "../../api/apiClient";
import endpoints from "../../api/endpoints";
import MobilesContext from "../../store/contexts/MobilesContext";
import { addMobileToCartActionCreator } from "../../store/actions/mobilesActionsCreators";

const useApi = () => {
  const { products, addToCart } = endpoints;

  const { dispatch } = useContext(MobilesContext);

  const getMobilesData = async () => {
    const { data } = await apiClient.get(`${products}`);

    return data;
  };

  const getMobileData = async (productId) => {
    const { data } = await apiClient.get(`${products}/${productId}`);
    return data;
  };

  const addMobileToCart = async ({ id, colorCode, storageCode }) => {
    const { data } = await apiClient.post(`${addToCart}`, {
      id,
      colorCode,
      storageCode,
    });

    dispatch(addMobileToCartActionCreator(data));

    return data;
  };

  return { getMobilesData, getMobileData, addMobileToCart };
};

export default useApi;
