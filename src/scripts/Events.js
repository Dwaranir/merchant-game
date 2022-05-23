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

  recordTheEvent(type) {
    this.type = type;
    this.eventOnPlayer.occuredEvents.push(this.type);
  }

  goodSpoiled() {
    if (this.eventOnPlayer.length < 1) return;
    this.recordTheEvent(this.eventOnPlayer.randomGoodSpoiled());
  }

  roguesFromBigRoad() {
    if (this.eventOnPlayer.money > 0) {
      this.recordTheEvent(this.eventOnPlayer.giveAllTheMoney());
    } else {
      this.recordTheEvent(this.eventOnPlayer.giveSomeGoods());
    }
  }

  metALocal() {
    this.recordTheEvent(this.eventOnPlayer.sayHiToLocal());
  }

  river() {
    this.recordTheEvent(this.eventOnPlayer.swimThroughRiver());
  }

  cartHasBeenDamaged() {
    this.recordTheEvent(this.eventOnPlayer.repairTheCart());
  }

  smoothRoad() {
    this.recordTheEvent(this.eventOnPlayer.speedUp());
  }

  rain() {
    this.recordTheEvent(this.eventOnPlayer.stall());
    if (Randomizer.generateRandomNumber(1, 10) <= 2) {
      this.recordTheEvent(this.eventOnPlayer.randomGoodSpoiled());
    }
  }

  summonEvent() {
    const maxValue = this.#EVENTS.length - 1;
    const randomEvent = Randomizer.generateRandomNumber(0, maxValue);

    this.#EVENTS[randomEvent]();
  }
}

export default Events;
