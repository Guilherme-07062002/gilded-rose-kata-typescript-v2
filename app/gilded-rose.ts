import { AgedBrieItemUpdater } from "./aged-brie-item-updater";
import { BackstagePassesItemUpdater } from "./backstage-passes-item-updater";
import { ConjuredItemUpdater } from "./conjured-item-updater";
import { NormalItemUpdater } from "./normal-item-updater";
import { UpdaterInterface } from "./updater";
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  private updater?: UpdaterInterface;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.updater = undefined;
  }

  private setUpdater(updater: UpdaterInterface) {
    this.updater = updater;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name.includes("Conjured")) {
        this.setUpdater(new ConjuredItemUpdater(item));
      } else if (item.name == "Aged Brie") {
        this.setUpdater(new AgedBrieItemUpdater(item));
      } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        this.setUpdater(new BackstagePassesItemUpdater(item));
      } else if (item.name == "Sulfuras, Hand of Ragnaros") {
        // do nothing
      } else {
        this.setUpdater(new NormalItemUpdater(item));
      }

      this.updater?.updateQuality();
    });

    return this.items;
  }
}
