const maxArea = require('../../neetcode/two-pointers/container-with-most-water');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
    });

    test('Case 2', () => {
        expect(maxArea([1, 1])).toStrictEqual(1);
    });
});
