import Randomizer from "./Randomizer";

class Events {
  #EVENTS = [
    this.goodSpoiled.bind(this),
    this.roguesFromBigRoad.bind(this),
    this.metALocal.bind(this),
    this.river.bind(this),
    this.cartHasBeenDamaged.bind(this),
    this.smoothRoad.bind(this),
    this.rain.bind(this),
  ];

  constructor(player) {
    this.eventOnPlayer = player;
    this.type = "Начало игры";
  }

  goodSpoiled() {
    if (this.eventOnPlayer.length < 1) return;
    this.eventOnPlayer.randomGoodSpoiled();
    this.type = "Еда испортилась";
  }

  roguesFromBigRoad() {
    if (this.eventOnPlayer.money > 0) {
      this.eventOnPlayer.giveAllTheMoney();
      this.type = "Вас ограбили";
    } else {
      this.eventOnPlayer.giveSomeGoods();
      this.type = "Разбойники украли у вас товары";
    }
  }

  metALocal() {
    this.eventOnPlayer.sayHiToLocal();
    this.type = "Вы встретили местного крестиянина";
  }

  river() {
    this.eventOnPlayer.swimThroughRiver();
    this.type = "Пришлось перебираться через реку";
  }

  cartHasBeenDamaged() {
    this.eventOnPlayer.repairTheCart();
    this.type = "Вы потратили день на починку телеги";
  }

  smoothRoad() {
    this.eventOnPlayer.speedUp();
    this.type = "Вам повезло, дорога - просто сказка";
  }

  rain() {
    this.eventOnPlayer.stall();
    this.type = "Пошел дождь";
    if (Randomizer.generateRandomNumber(1, 10) <= 2) {
      this.eventOnPlayer.randomGoodSpoiled();
      this.type = "Пошел дождь и один из продуктов испортился";
    }
  }

  summonEvent() {
    this.#EVENTS[Randomizer.generateRandomNumber(0, this.#EVENTS.length - 1)]();
  }
}

export default Events;
