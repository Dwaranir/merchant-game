import Merchant from "./Merchant";
import Good from "./Good";
import Events from "./Events";
import City from "./City";

class Engine {
  constructor(DOMEvent) {
    this.player = new Merchant();
    this.destinationCity = new City();
    this.events = new Events(this.player);
    this.areWeThereYet =
      this.player.distanceTraveled >= this.destinationCity.distance;

    this.startGame(DOMEvent);
  }

  getLowestValues() {
    const good = new Good();

    const lowest = {
      price: good.getLowestRise("buyPrice"),
      weight: good.getLowestRise("weight"),
    };

    return lowest;
  }

  buyGoodsForTrip() {
    const { price: lowestPrice, weight: lowestWeight } = this.getLowestValues();

    while (
      this.player.money > lowestPrice &&
      this.player.currentLoad + lowestWeight < this.player.weightLimit
    ) {
      this.player.buyGood();
    }
  }

  startGame(event) {
    const { value: startingCity } = event.target["starting--city"];
    const { value: money } = event.target["starting--money"];
    const { value: weightLimit } = event.target["weight--limit"];

    this.player.startingCity = startingCity;
    this.player.money = Number(money);
    this.player.weightLimit = Number(weightLimit);

    this.buyGoodsForTrip();
  }
}

export default Engine;
