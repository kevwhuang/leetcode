const hammingWeight = require('../../algorithms/bit-manipulation/number-of-1-bits');

describe('Main', () => {
    test('Case 1', () => {
        const n = parseInt('00000000000000000000000000001011', 2);

        expect(hammingWeight(n)).toStrictEqual(3);
    });

    test('Case 2', () => {
        const n = parseInt('00000000000000000000000010000000', 2);

        expect(hammingWeight(n)).toStrictEqual(1);
    });

    test('Case 3', () => {
        const n = parseInt('11111111111111111111111111111101', 2);

        expect(hammingWeight(n)).toStrictEqual(31);
    });
});
