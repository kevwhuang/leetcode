const alienOrder = require('../../neetcode/advanced-graphs/alien-dictionary');

describe('Main', () => {
    test('Case 1', () => {
        expect(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt'])).toStrictEqual('wertf');
    });

    test('Case 2', () => {
        expect(alienOrder(['z', 'x'])).toStrictEqual('zx');
    });

    test('Case 3', () => {
        expect(alienOrder(['z', 'x', 'z'])).toStrictEqual('');
    });
});
