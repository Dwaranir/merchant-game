import React from "react";

import StartingMenu from "../../components/starting_menu/starting_menu.component";
import Gameplay from "../../components/gameplay/gameplay.component";
import EndScreen from "../../components/end_screen/end_screen.component";

import Engine from "../../scripts/Engine";

import { useState } from "react";

import "./merchant_game.styles.scss";

const MerchantGame = () => {
  const [game, setGame] = useState();
  const [gameStage, setGameStage] = useState("StartingMenu");

  const renderGameStage = (gameStage) => {
    switch (gameStage) {
      case "StartingMenu":
        return (
          <StartingMenu
            Engine={Engine}
            Game={game}
            setGame={setGame}
            setGameStage={setGameStage}
          />
        );
      case "Gameplay":
        return (
          <Gameplay
            game={game}
            gameStage={gameStage}
            setGame={setGame}
            setGameStage={setGameStage}
          />
        );
      case "EndScreen":
        return <EndScreen Game={game} setGameStage={setGameStage} />;

      default:
        break;
    }
  };

  return <section className="game"> {renderGameStage(gameStage)}</section>;
};

export default MerchantGame;
