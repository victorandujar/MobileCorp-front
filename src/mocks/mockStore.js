export const dispatch = jest.fn();
export const mobiles = { count: 1 };
export const mockStore = { dispatch, mobiles: {} };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockAddMobileToCartAction = {
  type: "addMobileToCart",
  payload: mobiles,
};
