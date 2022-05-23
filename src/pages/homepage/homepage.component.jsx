import React from "react";

import MenuBtn from "../../components/menu_btn/menu_btn.component";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="menu">
      <MenuBtn content="Начать играть" way="/game" />
      <MenuBtn content="Настройки" way="/settings" />
    </div>
  );
};

export default Homepage;
