const trap = require('../../algorithms/two-pointers/trapping-rain-water');

describe('Main', () => {
    test('Case 1', () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6);
    });

    test('Case 2', () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toStrictEqual(9);
    });
});
