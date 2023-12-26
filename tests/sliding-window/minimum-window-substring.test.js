const minWindow = require('../../neetcode/sliding-window/minimum-window-substring');

describe('Main', () => {
    test('Case 1', () => {
        expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC');
    });
    test('Case 2', () => {
        expect(minWindow('a', 'a')).toStrictEqual('a');
    });
    test('Case 3', () => {
        expect(minWindow('a', 'aa')).toStrictEqual('');
    });
});
