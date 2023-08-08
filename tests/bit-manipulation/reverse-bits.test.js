const reverseBits = require('../../neetcode/bit-manipulation/reverse-bits');

describe('Main', () => {
    test('Case 1', () => {
        const n = parseInt('00000010100101000001111010011100', 2);
        expect(reverseBits(n)).toStrictEqual(964176192);
    });

    test('Case 2', () => {
        const n = parseInt('11111111111111111111111111111101', 2);
        expect(reverseBits(n)).toStrictEqual(3221225471);
    });
});
