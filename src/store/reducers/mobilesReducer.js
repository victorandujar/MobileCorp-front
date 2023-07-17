const mobilesReducer = (state, action) => {
  switch (action.type) {
    case "addMobileToCart":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default mobilesReducer;
