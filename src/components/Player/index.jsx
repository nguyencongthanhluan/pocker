import React from "react";
import Card from "../Card";

const Player = (props) => {
  const renderCard = () => {
    return props.player.cards.map((card, index) => (
      <Card key={index} card={card} />
    ));
  };
  return (
    <div className={`player-${props.index}`}>
      <p className="lead">{props.player.username}</p>
      <main className="d-flex">{renderCard()}</main>
    </div>
  );
};

export default Player;
