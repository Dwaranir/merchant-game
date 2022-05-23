import React from "react";

import "./events.styles.scss";

const Events = ({ Game, setGame, gameStage, setGameStage }) => {
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

  const autoPlay = () => {
    while (Game.player.distanceTraveled < Game.destinationCity.distance) {
      tripContinue();
    }
  };

  return (
    <section className="events--section">
      <div className="event">{Game.events.type}</div>
      <div className="events--inputs">
        <input
          onClick={() => tripContinue()}
          className="game--button attach--bottom btn"
          type="button"
          value="Продолжить"
        />
        <input
          onClick={() => autoPlay()}
          className="game--button attach--bottom btn"
          type="button"
          value="Автоигра"
        />
      </div>
    </section>
  );
};

export default Events;
