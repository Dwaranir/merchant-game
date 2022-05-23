import React from "react";

const EndScreen = ({ Game, setGameStage }) => {
  return (
    <div>
      <input
        className="menu--item"
        type="button"
        value="Test"
        onClick={() => console.log(Game)}
      />
      <input
        className="menu--item"
        type="button"
        value="Начать сначала"
        onClick={() => setGameStage("StartingMenu")}
      />
    </div>
  );
};

export default EndScreen;
