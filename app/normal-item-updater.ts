import { UpdaterClass, UpdaterInterface } from "./updater";

export class NormalItemUpdater
  extends UpdaterClass
  implements UpdaterInterface
{
  updateQuality(): void {
    if (this.sellInDayHasPassed()) {
      this.decreaseQuality(2);
    } else {
      this.decreaseQuality(1);
    }

    this.passDay();
  }
}
