import { Item } from "./gilded-rose";

export interface UpdaterInterface {
  updateQuality(): void;
}

export abstract class UpdaterClass {
  constructor(protected item: Item) {}

  protected decreaseQuality(amount: number) {
    if (this.item.quality > 0) this.item.quality -= amount;
    if (this.item.quality < 0) this.item.quality = 0;
  }

  protected increaseQuality(amount: number) {
    if (this.item.quality < 50) this.item.quality += amount;
    if (this.item.quality > 50) this.item.quality = 50;
  }

  protected passDay() {
    this.item.sellIn -= 1;
  }

  protected sellInDayHasPassed() {
    return this.item.sellIn <= 0;
  }
}
