const myPow = require('../../algorithms/math-geometry/pow-x-n');

describe('Main', () => {
    test('Case 1', () => {
        expect(myPow(2.00000, 10)).toBeCloseTo(1024.00000);
    });

    test('Case 2', () => {
        expect(myPow(2.10000, 3)).toBeCloseTo(9.26100);
    });

    test('Case 3', () => {
        expect(myPow(2.00000, -2)).toBeCloseTo(0.25000);
    });
});
