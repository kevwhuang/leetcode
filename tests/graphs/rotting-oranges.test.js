const orangesRotting = require('../../neetcode/graphs/rotting-oranges');

describe('Main', () => {
    test('Case 1', () => {
        expect(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])).toStrictEqual(4);
    });
    test('Case 2', () => {
        expect(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])).toStrictEqual(-1);
    });
    test('Case 3', () => {
        expect(orangesRotting([[0, 2]])).toStrictEqual(0);
    });
});
