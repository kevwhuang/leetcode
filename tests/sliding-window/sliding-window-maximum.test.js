const maxSlidingWindow = require('../../neetcode/sliding-window/sliding-window-maximum');

describe('Main', () => {
    test('Case 1', () => {
        const nums = [1, 3, -1, -3, 5, 3, 6, 7];
        const solution = [3, 3, 5, 5, 6, 7];
        expect(maxSlidingWindow(nums, 3)).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
    });
});
