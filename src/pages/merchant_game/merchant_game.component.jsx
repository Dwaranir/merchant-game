import React from "react";

import "./merchant_game.styles.scss";

const MerchantGame = () => {
  class Randomizer {
    static generateRandomNumber(min, max) {
      let random = Math.round(Math.random() * (max - min) + min);
      return random;
    }

    static getRandomItem(itemList, min, max) {
      return itemList[Math.round(this.generateRandomNumber(min, max))];
    }
  }

  class Merchant {
    #MIN_STARTING_MONEY = 10;
    #MAX_STARTING_MONEY = 100;
    #DEFAULT_WEIGHT_LIMIT = 30;

    constructor() {
      this.weightLimit = this.#DEFAULT_WEIGHT_LIMIT;
      this.currentLoad = 0;
      this.speed = 0;
      this.money = this.earnStartingMoney();
      this.goodsInCart = [];
    }

    sellAllGoods(goodsPricesList) {
      this.money = goodsPricesList.reduce((a, b) => a + b, this.money);
    }

    measureSpeed() {
      this.speed = Randomizer.generateRandomNumber(1, 5);
    }

    earnStartingMoney() {
      return Randomizer.generateRandomNumber(
        this.#MIN_STARTING_MONEY,
        this.#MAX_STARTING_MONEY
      );
    }

    setCartSpeed() {
      this.speed = Randomizer.generateRandomNumber(1, 5);
    }

    buyGood() {
      const good = new Good();

      this.money = this.money - good.buyPrice;
      this.currentLoad = this.currentLoad + good.weight;
      this.goodsInCart.push(good);
    }
  }
  class Good {
    #QUALITY_LIST = {
      Normal: 1.2,
      "Slightly spoiled": 0.95,
      "Half spoiled": 0.55,
      "Almost fully spoiled": 0.25,
      Spoiled: 0.1,
    };

    #PRODUCTS = [
      { name: "Мясо", weight: 10, buyPrice: 20 },
      { name: "Сухофрукты", weight: 2, buyPrice: 16 },
      { name: "Зерно", weight: 20, buyPrice: 10 },
      { name: "Мука", weight: 5, buyPrice: 4 },
      { name: "Ткани", weight: 7, buyPrice: 30 },
      { name: "Краска", weight: 9, buyPrice: 36 },
    ];

    constructor() {
      const good = this.chooseProduct();

      this.name = good.name;
      this.quality = this.#QUALITY_LIST.Normal;
      this.weight = good.weight;
      this.buyPrice = good.buyPrice;
    }

    chooseProduct() {
      return Randomizer.getRandomItem(
        this.#PRODUCTS,
        0,
        this.#PRODUCTS.length - 1
      );
    }

    calculateSellPrice() {
      this.buyPrice *= this.quality;
    }

    getLowestRise(field) {
      function sortFromLowest(a, b) {
        return a[field] - b[field];
      }

      this.#PRODUCTS.sort(sortFromLowest);
      return this.#PRODUCTS[0][field];
    }

    // constructor() {
    //   this.name = "";
    //   this.quality = this.#QUALITY_LIST.Normal;
    //   this.weight = 0;
    //   this.buyPrice = 0;

    //   this.setProduct();
    // }

    // async setProduct() {
    //   try {
    //     const product = await this.chooseProduct();

    //     this.name = product.name;
    //     this.quality = this.#QUALITY_LIST.Normal;
    //     this.weight = product.weight;
    //     this.buyPrice = product.buyPrice;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchProducts() {
    //   const products = [
    //     { name: "Мясо", weight: 10, buyPrice: 20 },
    //     { name: "Сухофрукты", weight: 2, buyPrice: 16 },
    //     { name: "Зерно", weight: 20, buyPrice: 10 },
    //     { name: "Мука", weight: 5, buyPrice: 4 },
    //     { name: "Ткани", weight: 7, buyPrice: 30 },
    //     { name: "Краска", weight: 9, buyPrice: 36 },
    //   ];

    //   return new Promise((resolve) =>
    //     setTimeout(() => resolve(products), 2000)
    //   ).then((resolved) => resolved);
    // }

    // async chooseProduct() {
    //   const products = await this.fetchProducts();

    //   return Randomizer.getRandomItem(products, 0, products.length - 1);
    // }

    // calculateSellPrice() {
    //   this.buyPrice *= this.quality;
    // }

    // async getLowestRise(field) {
    //   function sortFromLowest(a, b) {
    //     return a[field] - b[field];
    //   }

    //   const products = await this.fetchProducts();
    //   products.sort(sortFromLowest);
    //   return products[0][field];
    // }
  }

  class City {
    #MIN_DISTANCE = 50;
    #MAX_DISTANCE = 100;

    #CITY_NAMES = [
      "Алматы",
      "Астана",
      "Актау",
      "Караганда",
      "Павлодар",
      "Шымкент",
      "Петропавловск",
    ];

    constructor() {
      this.name = Randomizer.getRandomItem(this.#CITY_NAMES, 0, 6);
      this.distance = Randomizer.generateRandomNumber(
        this.#MIN_DISTANCE,
        this.#MAX_DISTANCE
      );
    }

    ChooseCity() {
      Randomizer.getRandomItem(this.#CITY_NAMES, 0, 6);
    }

    GenerateDistance() {
      Randomizer.generateRandomNumber(50, 100);
    }
  }
  class Event {
    #EVENTS = [
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
      Randomizer.getRandomItem(this.#EVENTS, 0, 6);
    }
  }

  class Engine {
    constructor() {
      this.player = new Merchant();
      this.destinationCity = new City();

      const { price: lowestPrice, weight: lowestWeight } =
        this.getLowestValues();

      while (
        this.player.money >= lowestPrice &&
        this.player.currentLoad < this.player.weightLimit &&
        this.player.currentLoad >= lowestWeight
      ) {
        this.player.buyGood();
      }
    }

    getLowestValues() {
      const good = new Good();

      const lowest = {
        price: good.getLowestRise("buyPrice"),
        weight: good.getLowestRise("weight"),
      };

      return lowest;
    }
  }

  let good = new Engine();

  return (
    <div onClick={() => test()}>
      <div className="start--and__settings">
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Hi");
          }}
        >
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
