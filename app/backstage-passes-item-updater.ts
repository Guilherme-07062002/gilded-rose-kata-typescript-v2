import { UpdaterClass, UpdaterInterface } from "./updater";

export class BackstagePassesItemUpdater
  extends UpdaterClass
  implements UpdaterInterface
{
  updateQuality(): void {
    if (this.sellInDayHasPassed()) {
      this.item.quality = 0;
    } else if (this.item.sellIn <= 5) {
      this.increaseQuality(3);
    } else if (this.item.sellIn <= 10) {
      this.increaseQuality(2);
    } else {
      this.increaseQuality(1);
    }

    this.passDay();
  }
}
