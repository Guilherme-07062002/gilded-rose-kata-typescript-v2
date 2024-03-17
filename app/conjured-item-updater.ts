import { UpdaterClass, UpdaterInterface } from "./updater";

export class ConjuredItemUpdater
  extends UpdaterClass
  implements UpdaterInterface
{
  updateQuality(): void {
    if (this.sellInDayHasPassed()) {
      this.decreaseQuality(4);
    } else {
      this.decreaseQuality(2);
    }

    this.passDay();
  }
}
