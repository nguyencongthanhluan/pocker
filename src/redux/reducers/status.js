let initialState = {
  reveal: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REVEAL_CARD":
      state.reveal = true;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
