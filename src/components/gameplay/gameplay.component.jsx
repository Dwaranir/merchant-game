import React, { useState } from "react";

import Road from "../road/road.component";
import Events from "../events/events.component";
import PlayerStats from "../player_stats/player_stats.component";

import "./gameplay.styles.scss";

const Gameplay = ({ game, gameStage, setGameStage, setGame }) => {
  const [inventory, toggleInventory] = useState();

  const gameLoop = () => {
    while (gameStage === "Gameplay") {
      return (
        <section className="gameplay--stage">
          <PlayerStats
            Game={game.player}
            inventory={inventory}
            toggleInventory={toggleInventory}
          />
          <Events Game={game} setGame={setGame} setGameStage={setGameStage} />
          <Road Game={game} />
        </section>
      );
    }
  };
  return gameLoop();
};

export default Gameplay;
