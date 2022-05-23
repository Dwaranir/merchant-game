import React from "react";

import Merchant from "../../assets/merchant.webp";

import "./road.styles.scss";

const Road = ({ Game }) => {
  const { player, destinationCity } = Game;
  const { distanceTraveled: currentPosition } = player;
  let { distance: range } = destinationCity;

  const generateRoad = () => {
    const road = [];
    while (range > 0) {
      if (currentPosition + 1 === range) {
        const id = range + "player";
        road.push(
          <div key={id} className="player">
            <img src={Merchant} alt="Player" />
          </div>
        );
        range--;
      } else {
        const id = range + "dot";
        road.push(
          <div key={id} className="dot">
            .
          </div>
        );
        range--;
      }
    }
    return road.reverse();
  };

  return <div className="road">{generateRoad()}</div>;
};

export default Road;
