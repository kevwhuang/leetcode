const LRUCache = require('../../neetcode/linked-list/lru-cache');

describe('Main', () => {
    test('Case 1', () => {
        const lruCache = new LRUCache(2);
        lruCache.put(1, 1);
        lruCache.put(2, 2);
        expect(lruCache.get(1)).toStrictEqual(1);
        lruCache.put(3, 3);
        expect(lruCache.get(2)).toStrictEqual(-1);
        lruCache.put(4, 4);
        expect(lruCache.get(1)).toStrictEqual(-1);
        expect(lruCache.get(3)).toStrictEqual(3);
        expect(lruCache.get(4)).toStrictEqual(4);
    });
});
