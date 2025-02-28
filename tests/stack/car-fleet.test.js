const carFleet = require('../../neetcode/stack/car-fleet');

describe('Main', () => {
    test('Case 1', () => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(carFleet(10, [3], [3])).toStrictEqual(1);
    });
    test('Case 3', () => {
        expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toStrictEqual(1);
    });
});
