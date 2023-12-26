const networkDelayTime = require('../../neetcode/advanced-graphs/network-delay-time');

describe('Main', () => {
    test('Case 1', () => {
        expect(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)).toStrictEqual(2);
    });
    test('Case 2', () => {
        expect(networkDelayTime([[1, 2, 1]], 2, 1)).toStrictEqual(1);
    });
    test('Case 3', () => {
        expect(networkDelayTime([[1, 2, 1]], 2, 2)).toStrictEqual(-1);
    });
});
