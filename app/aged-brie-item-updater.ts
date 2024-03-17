import { UpdaterClass, UpdaterInterface } from "./updater";

export class AgedBrieItemUpdater
  extends UpdaterClass
  implements UpdaterInterface
{
  updateQuality(): void {
    if (this.sellInDayHasPassed()) {
      this.increaseQuality(2);
    } else {
      this.increaseQuality(1);
    }

    this.passDay();
  }
}
