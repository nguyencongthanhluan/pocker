let initialState = {
  playerList: [
    {
      username: "Player 1",
      totalPoint: 0,
      cards: [],
    },
    {
      username: "Player 2",
      totalPoint: 0,
      cards: [],
    },
    {
      username: "Player 3",
      totalPoint: 0,
      cards: [],
    },
    {
      username: "your name",
      totalPoint: 0,
      cards: [],
    },
  ],
};

const checkSpecialCase = (cards) => {
  const specialCards = ["KING", "JACK", "QUEEN"];
  for (let card of cards) {
    if (!specialCards.includes(card.value)) {
      return false;
    }
  }
  return true;
};

const convertCardValue = (value) => {
  const specialCards = ["KING", "JACK", "QUEEN"];
  if (specialCards.includes(value)) return 10;
  if (value === "ACE") return 1;
  return +value;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      state.playerList[3].username = payload;
      return { ...state };
    case "DRAW_CARD":
      const clonePlayerList = [...state.playerList];
      for (let i in payload) {
        clonePlayerList[i % clonePlayerList.length].cards.push(payload[i]);
      }
      state.playerList = clonePlayerList;
      return { ...state };
    case "REVEAL_CARD": {
      let results = [];
      const clonePlayerList = state.playerList;
      for (let player of clonePlayerList) {
        if (checkSpecialCase(player.cards)) {
          results.push(player);
        }
      }
      if (results.length) {
      }
      for (let player of clonePlayerList) {
      }
    }
    default:
      return state;
  }
};

export default reducer;
