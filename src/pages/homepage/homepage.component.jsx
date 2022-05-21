import React from "react";
import { Link } from "react-router-dom";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="menu">
      <Link className="menu--item" to="/game">
        <div>Начать играть</div>
      </Link>
      <Link className="menu--item" to="/settings">
        <div>Настройки</div>
      </Link>
    </div>
  );
};

export default Homepage;
