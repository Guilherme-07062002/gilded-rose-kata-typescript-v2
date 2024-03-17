import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal Item", () => {
    it("should decrease quality by 1", () => {
      const given = [new Item("foo", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(9);
    });

    it("should decrease sellIn by 1", () => {
      const given = [new Item("foo", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(9);
    });

    it("should decrease quality by 2 after sellIn date", () => {
      const given = [new Item("foo", 0, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(8);
    });

    it("should not decrease quality below 0", () => {
      const given = [new Item("foo", 0, 0)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality by 1", () => {
      const given = [new Item("Aged Brie", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(11);
    });

    it("should increase quality by 2 after sellIn date", () => {
      const given = [new Item("Aged Brie", 0, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(12);
    });

    it("should not increase quality above 50", () => {
      const given = [new Item("Aged Brie", 10, 50)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBeLessThanOrEqual(50);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not decrease quality", () => {
      const given = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(10);
    });

    it("should not decrease sellIn", () => {
      const given = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(10);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("should increase quality by 1", () => {
      const given = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10),
      ];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(11);
    });

    it("should increase quality by 2 when sellIn is 10 or less", () => {
      const given = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      ];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(12);
    });

    it("should increase quality by 3 when sellIn is 5 or less", () => {
      const given = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
      ];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(13);
    });

    it("should drop quality to 0 after sellIn date", () => {
      const given = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
      ];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it("should not increase quality above 50", () => {
      const given = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      ];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBeLessThanOrEqual(50);
    });
  });

  describe("Conjured", () => {
    it("should decrease quality by 2", () => {
      const given = [new Item("Conjured", 10, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(8);
    });

    it("should decrease quality by 4 after sellIn date", () => {
      const given = [new Item("Conjured", -1, 10)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(6);
    });

    it("should not decrease quality below 0", () => {
      const given = [new Item("Conjured", 0, 0)];
      const gildedRose = new GildedRose(given);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });
});
