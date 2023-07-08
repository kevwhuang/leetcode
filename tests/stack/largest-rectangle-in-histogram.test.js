const largestRectangleArea = require('../../algorithms/stack/largest-rectangle-in-histogram');

describe('Main', () => {
    test('Case 1', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toStrictEqual(10);
    });

    test('Case 2', () => {
        expect(largestRectangleArea([2, 4])).toStrictEqual(4);
    });
});
