const TimeMap = require('../../neetcode/binary-search/time-based-key-value-store');

describe('Main', () => {
    test('Case 1', () => {
        const timeMap = new TimeMap();
        timeMap.set('foo', 'bar', 1);
        expect(timeMap.get('foo', 1)).toStrictEqual('bar');
        expect(timeMap.get('foo', 3)).toStrictEqual('bar');
        timeMap.set('foo', 'bar2', 4);
        expect(timeMap.get('foo', 4)).toStrictEqual('bar2');
        expect(timeMap.get('foo', 5)).toStrictEqual('bar2');
    });
});
