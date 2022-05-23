import Randomizer from "./Randomizer";

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

export default City;
