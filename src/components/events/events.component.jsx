import React from "react";

import "./events.styles.scss";

const Events = ({ Game, setGame, setGameStage }) => {
  const gameOver = () => {
    Game.player.sellAllStuff();
    setGameStage("EndScreen");
  };

  const tripContinue = () => {
    Game.events.summonEvent();
    Game.player.moveForward();

    setGame({ ...Game });

    Game.player.isItTheEnd(
      Game.player.distanceTraveled,
      Game.destinationCity.distance
    ) && gameOver();
  };

  return (
    <section className="events--section">
      <div className="event">{Game.events.type}</div>
      <input
        onClick={() => tripContinue()}
        className="game--button attach--bottom"
        type="button"
        value="Продолжить"
      />
    </section>
  );
};

export default Events;
