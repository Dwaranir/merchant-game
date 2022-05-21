import React from "react";
import "./merchant_game.styles.scss";

const MerchantGame = () => {
  // SETTINGS

  class Randomizer {
    static generateRandomNumber(min, max) {
      let random = Math.round(Math.random() * (max - min + 1) + min);
      return random;
    }

    static getRandomItem(itemList, min, max) {
      return itemList[Math.round(this.generateRandomNumber(min, max))];
    }
  }

  class Merchant {
    #min_good_price = 10;

    constructor(weightLimit, speed, money) {
      this.weightLimit = weightLimit;
      this.speed = speed;
      this.money = money;
    }

    isMoneyEnough(nextGoodPrice = this.#min_good_price) {
      if (this.money >= 0 && this.money >= nextGoodPrice) return true;
      return false;
    }

    sellAllGoods(goodsPricesList) {
      this.money = goodsPricesList.reduce((a, b) => a + b, this.money);
    }
  }
  class Good {
    #qualityList = {
      normal: 1.2,
      "slightly spoiled": 0.95,
      "half spoiled": 0.55,
      "almost fully spoiled": 0.25,
      spoiled: 0.1,
    };

    #product_names = ["Мясо", "Сухофрукты", "Зерно", "Мука", "Ткани", "Краска"];

    constructor(goodWeight, quality, buyPrice) {
      this.name = this.chooseProduct();
      this.goodWeight = goodWeight;
      this.quality = quality;
      this.buyPrice = buyPrice;
    }

    chooseProduct() {
      return Randomizer.getRandomItem(
        this.#product_names,
        0,
        this.#product_names.length - 1
      );
    }

    calculateSellPrice() {
      this.buyPrice = this.buyPrice * this.quality;
    }
  }

  class City {
    #min_distance = 50;
    #max_distance = 100;

    #city_names = [
      "Алматы",
      "Астана",
      "Актау",
      "Караганда",
      "Павлодар",
      "Шымкент",
      "Петропавловск",
    ];

    constructor() {
      this.name = Randomizer.getRandomItem(this.#city_names, 0, 6);
      this.distance = Randomizer.generateRandomNumber(
        this.#min_distance,
        this.#max_distance
      );
    }

    ChooseCity() {
      Randomizer.getRandomItem(this.#city_names, 0, 6);
    }

    GenerateDistance() {
      Randomizer.generateRandomNumber(50, 100);
    }
  }
  class Event {
    #events = [
      "Обычный День",
      "Дождь",
      "Ровная дорога",
      "Телега Сломалась",
      "Река",
      "Встретил Местного",
      "Разбойники большой дороги",
      "Придорожный трактир",
      "Товар испортился",
    ];

    constructor(type) {
      this.type = type;
    }

    ChooseEvent() {
      Randomizer.getRandomItem(this.#events, 0, 6);
    }
  }

  class Engine {
    constructor() {
      this.player = new Merchant();
    }
  }

  let c = new City();
  let e = new Event();
  let b = 10;
  let list = [5, 10, 15];
  let test = () => {
    b = list.reduce((a, c) => a + c, b);
    console.log(b);
  };

  return (
    <div onClick={() => test()}>
      <div className="start--and__settings">
        <form action="submit">
          <input className="start--btn" type="submit" value="Start" />
          <div className="settings">
            <input type="number" placeholder="Грузоподъемность телеги" />
            <input type="number" placeholder="Стартовые деньги" />
            <input type="number" placeholder="Стартовый город" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MerchantGame;
