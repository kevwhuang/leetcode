const canFinish = require('../../neetcode/graphs/course-schedule');

describe('Main', () => {
    test('Case 1', () => {
        expect(canFinish(2, [[1, 0]])).toBeTruthy();
    });
    test('Case 2', () => {
        expect(canFinish(5, [[1, 0], [0, 1]])).toBeFalsy();
    });
});
