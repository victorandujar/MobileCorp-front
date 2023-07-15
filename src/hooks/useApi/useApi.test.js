import endpoints from "../../api/endpoints";
import { mobileMockAcer, mobileMocks } from "../../mocks/mocks";
import useApi from "./useApi";
import apiClient from "../../api/apiClient";

jest.mock("../../api/apiClient");

describe("Given a useApi custom hook", () => {
  describe("When it is called", () => {
    const { products } = endpoints;

    beforeEach(() => {
      jest.clearAllMocks();
    });
    test("Then getMobiles should fetch mobiles data from the API", async () => {
      const mockResponse = {
        data: mobileMocks,
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getMobilesData } = useApi();
      const mobilesData = await getMobilesData();

      expect(apiClient.get).toHaveBeenCalledWith(`${products}`);
      expect(mobilesData).toEqual(mockResponse.data);
    });
    test("Then getMobileData should fetch a mobile's data from the API", async () => {
      const productId = 123234234234;

      const mockResponse = {
        data: mobileMockAcer,
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getMobileData } = useApi();
      const mobileData = await getMobileData(productId);

      expect(apiClient.get).toHaveBeenCalledWith(`${products}/${productId}`);
      expect(mobileData).toEqual(mockResponse.data);
    });
  });
});
