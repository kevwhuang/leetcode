const dailyTemperatures = require('../../neetcode/stack/daily-temperatures');

describe('Main', () => {
    test('Case 1', () => {
        const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
        const solution = [1, 1, 4, 2, 1, 1, 0, 0];
        expect(dailyTemperatures(temperatures)).toStrictEqual(solution);
    });

    test('Case 2', () => {
        expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
    });

    test('Case 3', () => {
        expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0]);
    });
});
