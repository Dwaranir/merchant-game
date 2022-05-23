import React from "react";

import Inventory from "../inventory/inventory.component";

import "./player_stats.styles.scss";

const PlayerStats = ({ Game, inventory, toggleInventory }) => {
  const { startingCity, weightLimit, currentLoad, speed, money, goodsInCart } =
    Game;

  const renderPlayerStats = () => {
    if (inventory) {
      return (
        <section className="inventory">
          <div className="inventory--items__container">
            <Inventory Game={Game} goodsInCart={goodsInCart} />
          </div>
          <input
            className="game--button attach--bottom"
            type="button"
            value="Закрыть Инвентарь"
            onClick={() => {
              toggleInventory(!inventory);
            }}
          />
        </section>
      );
    } else
      return (
        <section className="player--stats__section">
          <div className="player--characteristics__container">
            <p className="starting--city">Стартовый город: {startingCity}</p>
            <p className="cart--current__load">
              Загрузка телеги: {currentLoad}{" "}
            </p>
            <p className="cart--weight__limit">
              Максимальная грузоподъемность телеги: {weightLimit}
            </p>
            <p className="cart--speed">Скорость телеги: {speed} </p>
            <p className="current--money">Колличество Денег: {money} </p>
          </div>
          <input
            className="game--button attach--bottom"
            type="button"
            value="Открыть Инвентарь"
            onClick={() => toggleInventory(true)}
          />
        </section>
      );
  };

  return renderPlayerStats();
};

export default PlayerStats;
