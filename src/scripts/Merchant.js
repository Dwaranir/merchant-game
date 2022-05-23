import Randomizer from "./Randomizer";
import Good from "./Good";

class Merchant {
  #MIN_STARTING_MONEY = 10;
  #MAX_STARTING_MONEY = 100;
  #ROGUES_STEAL_PERSENT = 0.2;
  DEFAULT_WEIGHT_LIMIT = 30;

  constructor(weightLimit = this.DEFAULT_WEIGHT_LIMIT) {
    this.weightLimit = weightLimit;
    this.currentLoad = 0;
    this.speed = 0;
    this.money = this.earnStartingMoney();
    this.startingMoney = this.money;
    this.goodsInCart = [];
    this.startingGoodsInCart = [];
    this.numberOfGoods = this.goodsInCart.length;
    this.startingCity = "";
    this.distanceTraveled = 0;
    this.occuredEvents = [];
  }

  sellAllGoods(goodsPricesList) {
    this.money = goodsPricesList.reduce((a, b) => a + b, this.money);
  }

  measureSpeed() {
    this.speed = Randomizer.generateRandomNumber(1, 5);
  }

  moveForward() {
    this.distanceTraveled += this.speed;
  }

  earnStartingMoney() {
    return Randomizer.generateRandomNumber(
      this.#MIN_STARTING_MONEY,
      this.#MAX_STARTING_MONEY
    );
  }

  setCartSpeed(maxSpeed = 5) {
    this.speed = Randomizer.generateRandomNumber(1, maxSpeed);
  }

  buyGood() {
    const good = new Good();

    const moneyAfterPurchase = this.money - good.buyPrice;
    const loadAfterPurchase = this.currentLoad + good.weight;

    if (moneyAfterPurchase < 0 || loadAfterPurchase > this.weightLimit) return;

    this.money = moneyAfterPurchase;
    this.currentLoad = loadAfterPurchase;
    this.goodsInCart.push(good);
    this.startingGoodsInCart.push(good);
  }

  randomGoodSpoiled() {
    const randomIndex = Randomizer.generateRandomNumber(0, this.numberOfGoods);
    this.goodsInCart?.[randomIndex]?.goBad();
    return "Еда испортилась";
  }

  giveAllTheMoney() {
    this.setCartSpeed();
    this.money = 0;
    return "Вас ограбили";
  }

  giveSomeGoods() {
    this.setCartSpeed();
    const productsInCart = this.goodsInCart.length;
    const name = "Разбойники украли у вас товары";

    if (productsInCart === 0) return name;
    else if (productsInCart === 1) {
      this.goodsInCart = 0;
      return name;
    } else {
      this.goodsInCart.length -= Math.floor(
        productsInCart * this.#ROGUES_STEAL_PERSENT
      );
      return name;
    }
  }

  sayHiToLocal() {
    this.setCartSpeed();
    this.speed += Randomizer.generateRandomNumber(3, 6);
    return "Вы встретили местного крестиянина";
  }

  swimThroughRiver() {
    this.setCartSpeed(2);
    return "Пришлось перебираться через реку";
  }

  repairTheCart() {
    this.speed = 0;
    return "Вы потратили день на починку телеги";
  }

  speedUp() {
    this.setCartSpeed(3);
    this.speed += 2;
    return "Вам повезло, дорога - просто сказка";
  }

  stall() {
    this.setCartSpeed(3);
    return "Пошел дождь";
  }

  sellGood(Good) {
    Good.calculateSellPrice();
    this.money += Math.floor(Good.buyPrice);
  }

  sellAllStuff() {
    if (this.goodsInCart.length === 0) return;
    this.goodsInCart.forEach((Good) => this.sellGood(Good));
    this.goodsInCart = [];
  }

  isItTheEnd(traveled, distance) {
    return traveled >= distance;
  }
}

export default Merchant;
