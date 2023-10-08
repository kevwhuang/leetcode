const findDuplicate = require('../../neetcode/linked-list/find-the-duplicate-number');

describe('Main', () => {
    test('Case 1', () => {
        expect(findDuplicate([1, 3, 4, 2, 2])).toStrictEqual(2);
    });

    test('Case 2', () => {
        expect(findDuplicate([3, 1, 3, 4, 2])).toStrictEqual(3);
    });
});
