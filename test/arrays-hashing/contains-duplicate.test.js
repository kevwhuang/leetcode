const containsDuplicate = require('../../algorithms/arrays-hashing/contains-duplicate');

describe('Main', () => {
    test('Case 1', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
    });

    test('Case 2', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
    });

    test('Case 3', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(true);
    });
});
