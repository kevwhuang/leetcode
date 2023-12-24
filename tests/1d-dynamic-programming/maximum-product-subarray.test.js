const maxProduct = require('../../neetcode/1d-dynamic-programming/maximum-product-subarray');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxProduct([2, 3, -2, 4])).toStrictEqual(6);
    });

    test('Case 2', () => {
        expect(maxProduct([-2, 0, -1])).toStrictEqual(0);
    });
});
