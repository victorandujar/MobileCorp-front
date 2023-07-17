import mobilesReducer from "./mobilesReducer";

describe("Given a mobilesReducer", () => {
  describe("When it receives the action to addMobileToCart and a new state of count", () => {
    test("Then it should return the new state", () => {
      const currentCountState = { count: 0 };

      const action = {
        type: "addMobileToCart",
        payload: currentCountState.count + 1,
      };

      const expectedNewCountState = mobilesReducer(currentCountState, action);

      expect(expectedNewCountState).toStrictEqual({
        count: currentCountState.count + 1,
      });
    });
  });

  describe("When it receives an invalid action type", () => {
    test("Then it should return the current state without any changes", () => {
      const currentState = { count: 5 };
      const action = {
        type: "action",
        payload: "",
      };
      const expectedState = mobilesReducer(currentState, action);
      expect(expectedState).toBe(currentState);
    });
  });
});
