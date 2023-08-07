const isHappy = require('../../algorithms/math-geometry/happy-number');

describe('Main', () => {
    test('Case 1', () => {
        expect(isHappy(19)).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isHappy(2)).toBeFalsy();
    });
});
