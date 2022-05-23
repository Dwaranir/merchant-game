import React from "react";

import { Link } from "react-router-dom";

import "./starting_menu.styles.scss";

const StartingMenu = ({ Engine, setGame, setGameStage }) => {
  return (
    <div className="start--and__settings">
      <form
        action="submit"
        onSubmit={(event) => {
          event.preventDefault();

          setGame(new Engine(event));
          setGameStage("Gameplay");
        }}
      >
        <input className="start--btn btn" type="submit" value="Start" />
        <div className="settings">
          <input
            type="number"
            name="weight--limit"
            placeholder="Грузоподъемность телеги"
            required
          />
          <input
            type="number"
            name="starting--money"
            placeholder="Стартовые деньги"
            required
          />
          <input
            type="text"
            name="starting--city"
            placeholder="Стартовый город"
            required
          />
        </div>
      </form>
      <Link className="menu--item btn" to="/">
        В главное меню
      </Link>
    </div>
  );
};

export default StartingMenu;
