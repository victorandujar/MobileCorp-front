import { addMobileToCartActionCreator } from "./mobilesActionsCreators";

describe("Given a addMobileToCartActionCreator", () => {
  describe("When it receives a new item to add to the cart", () => {
    test("Then it should call the acction addMobileToCart and add 1 item to the cart", () => {
      const count = {
        count: 3,
      };

      const expectedCartNumber = {
        type: "addMobileToCart",
        payload: count.count,
      };

      const addMobileToCartAction = addMobileToCartActionCreator(count.count);

      expect(addMobileToCartAction).toStrictEqual(expectedCartNumber);
    });
  });
});
