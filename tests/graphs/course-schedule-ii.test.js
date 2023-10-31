const findOrder = require('../../neetcode/graphs/course-schedule-ii');

describe('Main', () => {
    test('Case 1', () => {
        expect(findOrder(2, [[1, 0]])).toStrictEqual([0, 1]);
    });

    test('Case 2', () => {
        const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
        expect(findOrder(4, prerequisites)).toStrictEqual([0, 1, 2, 3]);
    });

    test('Case 3', () => {
        expect(findOrder(1, [])).toStrictEqual([0]);
    });
});
