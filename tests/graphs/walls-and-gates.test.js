const wallsAndGates = require('../../neetcode/graphs/walls-and-gates');

describe('Main', () => {
    test('Case 1', () => {
        const rooms = [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647],
        ];
        const solution = [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]];
        wallsAndGates(rooms);
        expect(rooms).toStrictEqual(solution);
    });
    test('Case 2', () => {
        const rooms = [[-1]];
        wallsAndGates(rooms);
        expect(rooms).toStrictEqual([[-1]]);
    });
});
