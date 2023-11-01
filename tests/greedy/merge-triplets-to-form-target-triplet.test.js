const mergeTriplets = require('../../neetcode/greedy/merge-triplets-to-form-target-triplet');

describe('Main', () => {
    test('Case 1', () => {
        const triplets = [[2, 5, 3], [1, 8, 4], [1, 7, 5]];
        expect(mergeTriplets(triplets, [2, 7, 5])).toBeTruthy();
    });

    test('Case 2', () => {
        expect(mergeTriplets([[3, 4, 5], [4, 5, 6]], [3, 2, 5])).toBeFalsy();
    });

    test('Case 3', () => {
        const triplets = [[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]];
        expect(mergeTriplets(triplets, [5, 5, 5])).toBeTruthy();
    });
});
