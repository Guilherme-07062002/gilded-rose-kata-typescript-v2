export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name.includes("Conjured")) {
        updateConjuredItem(item);
      } else if (item.name == "Aged Brie") {
        updateAgedBrieItem(item);
      } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        updateBackstagePassesItem(item);
      } else if (item.name == "Sulfuras, Hand of Ragnaros") {
        // do nothing
      } else {
        updateNormalItem(item);
      }
    });

    return this.items;

    function increaseQuality(item: Item, amount: number) {
      if (item.quality < 50) item.quality += amount;
      if (item.quality > 50) item.quality = 50;
    }

    function decreaseQuality(item: Item, amount: number) {
      if (item.quality > 0) item.quality -= amount;
      if (item.quality < 0) item.quality = 0;
    }

    function updateConjuredItem(item: Item) {
      decreaseQuality(item, 2);
      if (item.sellIn <= 0) decreaseQuality(item, 2);

      item.sellIn -= 1;
    }

    function updateAgedBrieItem(item: Item) {
      increaseQuality(item, 1);
      if (item.sellIn <= 0) increaseQuality(item, 1);

      item.sellIn -= 1;
    }

    function updateBackstagePassesItem(item: Item) {
      if (item.sellIn <= 0) {
        item.quality = 0;
      } else if (item.sellIn <= 5) {
        increaseQuality(item, 3);
      } else if (item.sellIn <= 10) {
        increaseQuality(item, 2);
      } else {
        increaseQuality(item, 1);
      }
      item.sellIn -= 1;
    }

    function updateNormalItem(item: Item) {
      decreaseQuality(item, 1);
      if (item.sellIn <= 0) decreaseQuality(item, 1);

      item.sellIn -= 1;
    }
  }
}
