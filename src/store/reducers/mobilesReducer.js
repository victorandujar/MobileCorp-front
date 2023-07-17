const mobilesReducer = (state, action) => {
  if (action.type === "addMobileToCart") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else {
    return state;
  }
};

export default mobilesReducer;
