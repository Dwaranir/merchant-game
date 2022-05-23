import React from "react";
import Inventory from "../inventory/inventory.component";

import "./end_screen.styles.scss";

const EndScreen = ({ Game, setGameStage }) => {
  const { money, startingMoney, startingGoodsInCart, occuredEvents } =
    Game.player;

  const wasItProfitable = () => {
    const tripProfit = `Профит с поездки составил ${money - startingMoney} USD`;
    const tripUnprofit = "Поездка не окупилась";

    if (money > startingMoney) return tripProfit;
    else return tripUnprofit;
  };

  return (
    <section className="end--screen">
      <section className="statistic">
        <div className="bought--goods">
          <Inventory goodsInCart={startingGoodsInCart} />
        </div>
        <div className="profit--from__trip">{wasItProfitable()}</div>
        <div className="events--occured">
          {occuredEvents.map((event) => (
            <p>{event}</p>
          ))}
        </div>
      </section>

      <input
        className="menu--item btn start--again"
        type="button"
        value="Начать сначала"
        onClick={() => setGameStage("StartingMenu")}
      />
    </section>
  );
};

export default EndScreen;
