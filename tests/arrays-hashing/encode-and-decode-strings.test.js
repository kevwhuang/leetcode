const { encode, decode } = require('../../neetcode/arrays-hashing/encode-and-decode-strings');

describe('Main', () => {
    test('Case 1', () => {
        expect(decode(encode(['Hello', 'World']))).toStrictEqual(['Hello', 'World']);
    });

    test('Case 2', () => {
        expect(decode(encode(['']))).toStrictEqual(['']);
    });
});
