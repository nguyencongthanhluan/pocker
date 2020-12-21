import React, { Fragment, useEffect } from "react";
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import Axios from "axios";
import { useDispatch } from "react-redux";
const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //useEffect bao gồm Didmount,DidUpdate,willUnmount, có thể tạo nhiều useEffect
    //promise chaining call tuần tự theo thứ tự
    //promise.all(axios(),axios(),axios()) call nhiều api cùng lúc và chờ tất cả call xong

    Axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SET_DECK_CARD",
          payload: res.data,
        });
        // return Axios({
        //   method: "GET",
        //   url: `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=12`,
        // });
      })
      // .then((cardRes) => {
      //   console.log(cardRes);
      // })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <Fragment>
      <Controls />
      <Main />
    </Fragment>
  );
};

export default Game;
