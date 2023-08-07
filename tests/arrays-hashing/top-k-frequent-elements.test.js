const topKFrequent = require('../../algorithms/arrays-hashing/top-k-frequent-elements');

describe('Main', () => {
    test('Case 1', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
    });

    test('Case 2', () => {
        expect(topKFrequent([1], 1)).toStrictEqual([1]);
    });
});
