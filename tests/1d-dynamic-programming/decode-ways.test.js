const numDecodings = require('../../neetcode/1d-dynamic-programming/decode-ways');

describe('Main', () => {
    test('Case 1', () => {
        expect(numDecodings('12')).toStrictEqual(2);
    });
    test('Case 2', () => {
        expect(numDecodings('226')).toStrictEqual(3);
    });
    test('Case 3', () => {
        expect(numDecodings('06')).toStrictEqual(0);
    });
});
