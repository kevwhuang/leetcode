const DetectSquares = require('../../neetcode/math-geometry/detect-squares');

describe('Main', () => {
    test('Case 1', () => {
        const squares = new DetectSquares();
        squares.add([3, 10]);
        squares.add([11, 2]);
        squares.add([3, 2]);
        expect(squares.count([11, 10])).toStrictEqual(1);
        expect(squares.count([14, 8])).toStrictEqual(0);
        squares.add([11, 2]);
        expect(squares.count([11, 10])).toStrictEqual(2);
    });
});
