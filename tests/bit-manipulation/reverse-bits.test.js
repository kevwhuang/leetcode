const reverseBits = require('../../neetcode/bit-manipulation/reverse-bits');

describe('Main', () => {
    test('Case 1', () => {
        expect(reverseBits(43261596)).toStrictEqual(964176192);
    });
    test('Case 2', () => {
        expect(reverseBits(4294967293)).toStrictEqual(3221225471);
    });
});
