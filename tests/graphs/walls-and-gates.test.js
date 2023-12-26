const wallsAndGates = require('../../neetcode/graphs/walls-and-gates');

describe('Main', () => {
    test('Case 1', () => {
        const INF = 2147483647;
        const rooms = [
            [INF, -1, 0, INF],
            [INF, INF, INF, -1],
            [INF, -1, INF, -1],
            [0, -1, INF, INF],
        ];
        const solution = [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]];
        expect(wallsAndGates(rooms)).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(wallsAndGates([[-1]])).toStrictEqual([[-1]]);
    });
});
