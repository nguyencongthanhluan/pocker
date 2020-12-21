import React, { useState, useCallback, useMemo } from "react";
import Game from "../Game";
import { useDispatch } from "react-redux";
import Congrat from "../../components/Congrat";

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleStartGame = useCallback(() => {
    setGameStarted(true);
    dispatch({
      type: "SET_NAME",
      payload: name,
    });
  }, [name, dispatch]);

  const handleChange = useCallback((e) => {
    //useCallback bọc hàm
    setName(e.target.value);
  }, []);

  const total = useMemo(() => {
    //useMemo bọc biến
    return 3 + 4 + 7 + 9;
  }, []);

  return (
    <>
      {gameStarted ? (
        <Game />
      ) : (
        <div
          className="text-center"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
          <h3>Fill your name and start</h3>
          <input
            onChange={handleChange}
            type="input"
            className="w-25 form-control mb-3"
          />
          <button onClick={handleStartGame} className="btn btn-success">
            Start new Game
          </button>
          {total}
          <Congrat />
        </div>
      )}
    </>
  );
};

export default Home;
