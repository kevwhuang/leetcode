const productExceptSelf = require('../../algorithms/arrays-hashing/product-of-array-except-self');

describe('Main', () => {
    test('Case 1', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
    });

    test('Case 2', () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([-0, 0, 9, -0, 0]);
    });
});
