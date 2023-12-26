const leastInterval = require('../../neetcode/heap-priority-queue/task-scheduler');

describe('Main', () => {
    test('Case 1', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toStrictEqual(8);
    });
    test('Case 2', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toStrictEqual(6);
    });
    test('Case 3', () => {
        const tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
        expect(leastInterval(tasks, 2)).toStrictEqual(16);
    });
});
