const numIslands = require('../../algorithms/graphs/number-of-islands');

describe('Main', () => {
    test('Case 1', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];

        expect(numIslands(grid)).toStrictEqual(1);
    });

    test('Case 2', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ];

        expect(numIslands(grid)).toStrictEqual(3);
    });
});
