const uniquePaths = require('../../neetcode/2d-dynamic-programming/unique-paths');

describe('Main', () => {
    test('Case 1', () => {
        expect(uniquePaths(3, 7)).toStrictEqual(28);
    });

    test('Case 2', () => {
        expect(uniquePaths(3, 2)).toStrictEqual(3);
    });
});
