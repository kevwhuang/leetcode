const climbStairs = require('../../neetcode/1d-dynamic-programming/climbing-stairs');

describe('Main', () => {
    test('Case 1', () => {
        expect(climbStairs(2)).toStrictEqual(2);
    });
    test('Case 2', () => {
        expect(climbStairs(3)).toStrictEqual(3);
    });
});
