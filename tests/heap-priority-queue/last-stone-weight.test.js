const lastStoneWeight = require('../../neetcode/heap-priority-queue/last-stone-weight');

describe('Main', () => {
    test('Case 1', () => {
        expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toStrictEqual(1);
    });
    test('Case 2', () => {
        expect(lastStoneWeight([1])).toStrictEqual(1);
    });
});
