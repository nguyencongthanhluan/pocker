import Axios from "axios";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"; //useSelector lấy dữ liệu từ store,tương tự mapStateToProps (không cần connect)

const Control = () => {
  const playerList = useSelector((state) => {
    return state.player.playerList;
  });

  const deckCard = useSelector((state) => {
    return state.card.deckCard;
  });

  const dispatch = useDispatch();

  const renderPlayers = useCallback(() => {
    return playerList.map((player, index) => (
      <div key={index} className="border px-3 text-center">
        <p>{player.username}</p>
        <p> {player.totalPoint} </p>
      </div>
    ));
  }, [playerList]);

  const handleDraw = useCallback(() => {
    Axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`,
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "DRAW_CARD",
          payload: res.data.cards,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deckCard]);

  const handleReveal = useCallback(() => {
    dispatch({
      type: "REVEAL_CARD",
    });
  }, [dispatch]);

  return (
    <div className="d-flex  justify-content-end container">
      <div className="border d-flex justify-content-center align-items-center px-2">
        <button className="btn btn-success mr-2">Shuffle</button>
        <button onClick={handleDraw} className="btn btn-info mr-2">
          Draw
        </button>
        <button onClick={handleReveal} className="btn btn-primary mr-2">
          Reveal
        </button>
      </div>
      <div className="d-flex">{renderPlayers()}</div>
    </div>
  );
};

export default Control;
