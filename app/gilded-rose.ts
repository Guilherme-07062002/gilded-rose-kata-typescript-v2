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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name.includes("Conjured")) {
        updateConjuredItem(item);
      } else if (item.name == "Aged Brie") {
        updateAgedBrieItem(item);
      } else {
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality < 50) {
            item.quality += 1;
            if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
              if (item.sellIn < 11) {
                if (item.quality < 50) item.quality += 1;
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) item.quality += 1;
              }
            }
          }
        } else if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") item.quality -= 1;
        }
        if (item.name != "Sulfuras, Hand of Ragnaros") item.sellIn -= 1;
        if (item.sellIn < 0) {
          if (item.name == "Aged Brie") {
            if (item.quality < 50) item.quality = item.quality + 1;
          } else {
            if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
              item.quality -= item.quality;
            } else {
              if (item.quality > 0) {
                if (item.name != "Sulfuras, Hand of Ragnaros")
                  item.quality -= 1;
              }
            }
          }
        }
      }
    }

    return this.items;

    function updateConjuredItem(item: Item) {
      if (item.quality > 0) {
        item.quality -= 2;
        if (item.sellIn <= 0) item.quality -= 2;
      }
      item.sellIn -= 1;
    }

    function updateAgedBrieItem(item: Item) {
      if (item.quality < 50) {
        item.quality += 1;
        if (item.sellIn <= 0) item.quality += 1;
      }
      item.sellIn -= 1;
    }
  }
}
