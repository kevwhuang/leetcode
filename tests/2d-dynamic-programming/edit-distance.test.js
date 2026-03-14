const minDistance = require('../../neetcode/2d-dynamic-programming/edit-distance');

describe('Main', () => {
    test('Case 1', () => {
        expect(minDistance('horse', 'ros')).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(minDistance('intention', 'execution')).toStrictEqual(5);
    });
});
