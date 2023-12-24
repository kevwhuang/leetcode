const swimInWater = require('../../neetcode/advanced-graphs/swim-in-rising-water');

describe('Main', () => {
    test('Case 1', () => {
        expect(swimInWater([[0, 2], [1, 3]])).toStrictEqual(3);
    });

    test('Case 2', () => {
        const grid = [
            [0, 1, 2, 3, 4],
            [24, 23, 22, 21, 5],
            [12, 13, 14, 15, 16],
            [11, 17, 18, 19, 20],
            [10, 9, 8, 7, 6],
        ];
        expect(swimInWater(grid)).toStrictEqual(16);
    });
});
