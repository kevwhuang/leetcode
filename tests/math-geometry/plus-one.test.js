const plusOne = require('../../neetcode/math-geometry/plus-one');

describe('Main', () => {
    test('Case 1', () => {
        expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
    });

    test('Case 2', () => {
        expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    });

    test('Case 3', () => {
        expect(plusOne([9])).toStrictEqual([1, 0]);
    });
});
