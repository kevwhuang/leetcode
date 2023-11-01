const canCompleteCircuit = require('../../neetcode/greedy/gas-station');

describe('Main', () => {
    test('Case 1', () => {
        expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toStrictEqual(-1);
    });
});
