import { Item, GildedRose } from '@/gilded-rose';

describe('testing gilded rose', () => {
  it('should foo', () => {
    const given = [new Item('foo', 0, 0)];
    const gildedRose = new GildedRose(given);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('foo');
  });
});
