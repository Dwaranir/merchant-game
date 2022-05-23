import Randomizer from "./Randomizer";

class Good {
  // В JS нет ENUM, тут я их мимикрирую
  QualityEnum = Object.freeze({
    Normal: 1.2,
    "Slightly spoiled": 0.95,
    "Half spoiled": 0.55,
    "Almost fully spoiled": 0.25,
    Spoiled: 0.1,
  });

  // Список возможных продуктов
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
    this.quality = this.QualityEnum.Normal;
    this.weight = good.weight;
    this.buyPrice = good.buyPrice;
  }

  // Выбор случайного продукта
  chooseProduct() {
    return Randomizer.getRandomItem(
      this.#PRODUCTS,
      0,
      this.#PRODUCTS.length - 1
    );
  }

  // Возвращает цену продажи исходя из качества и закупочной цены
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

  // Достает название качества продукта, исходя из его значения
  howBadIsGood() {
    return Object.keys(this.QualityEnum).find(
      (key) => this.QualityEnum[key] === this.quality
    );
  }

  // Метод "портит" один из случайных продуктов
  goBad() {
    const currentQualityName = this.howBadIsGood();

    switch (currentQualityName) {
      case "Normal":
        this.quality = this.QualityEnum["Slightly spoiled"];
        break;
      case "Slightly spoiled":
        this.quality = this.QualityEnum["Half spoiled"];
        break;
      case "Half spoiled":
        this.quality = this.QualityEnum["Almost fully spoiled"];
        break;
      case "Almost fully spoiled":
        this.quality = this.QualityEnum.Spoiled;
        break;
      default:
        this.quality = this.QualityEnum.Spoiled;
        break;
    }
  }

  // Пытался сделать создание объекта исходя из ассинхронных данных,
  // объекты создавались, но методы не отрабатывали, отложил на потом
  // constructor() {
  //   this.name = "";
  //   this.quality = this.QualityEnum.Normal;
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

export default Good;
