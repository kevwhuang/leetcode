const DetectSquares = require('../../neetcode/math-geometry/detect-squares');

describe('Main', () => {
    test('Case 1', () => {
        const detectSquares = new DetectSquares();
        detectSquares.add([3, 10]);
        detectSquares.add([11, 2]);
        detectSquares.add([3, 2]);
        expect(detectSquares.count([11, 10])).toStrictEqual(1);
        expect(detectSquares.count([14, 8])).toStrictEqual(0);
        detectSquares.add([11, 2]);
        expect(detectSquares.count([11, 10])).toStrictEqual(2);
    });
});
