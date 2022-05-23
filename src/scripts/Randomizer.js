class Randomizer {
  static generateRandomNumber(min, max) {
    let random = Math.round(Math.random() * (max - min) + min);
    return random;
  }

  static getRandomItem(itemList, min, max) {
    return itemList[Math.round(this.generateRandomNumber(min, max))];
  }
}

export default Randomizer;
