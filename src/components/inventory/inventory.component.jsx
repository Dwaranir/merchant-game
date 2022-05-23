import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./inventory.styles.scss";

const Inventory = ({ goodsInCart }) => {
  const qualityMark = (quality) => {
    switch (quality) {
      case 1.2:
        return "normal";
      case 0.95:
        return "slightly--spoiled";
      case 0.55:
        return "half--spoiled";
      case 0.25:
        return "almost--fully__spoiled";
      case 0.1:
        return "spoiled";

      default:
        break;
    }
  };

  const generateInventory = () =>
    goodsInCart.map(({ name, weight, quality, buyPrice }) => (
      <div key={uuidv4().slice(1, 10)} className="product">
        <p className="product--name">{name} </p>
        <p className="product--weight">Вес: {weight} </p>
        <p className={`product--quality ${qualityMark(quality)} `}>
          Качество: {quality}
        </p>
        <p className="product--sell__price">
          Цена: {Math.round(buyPrice * quality)}
        </p>
      </div>
    ));

  return generateInventory();
};

export default Inventory;
