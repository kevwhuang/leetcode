const { PriorityQueue } = require('@datastructures-js/priority-queue');

function minInterval(intervals, queries) {
    const comparator = (a, b) => a[0] - b[0] || a[1] - b[1];
    intervals.sort((a, b) => a[0] - b[0]);
    const arr = new Uint32Array(queries).sort();
    const pq = new PriorityQueue(comparator);
    const map = new Map();
    for (let i = 0, j = 0; i < arr.length; i++) {
        while (j < intervals.length && intervals[j][0] <= arr[i]) {
            const len = intervals[j][1] - intervals[j][0] + 1;
            pq.enqueue([len, intervals[j++][1]]);
        }
        while (pq.size() && pq.front()[1] < arr[i]) pq.dequeue();
        if (pq.size()) map.set(arr[i], pq.front()[0]);
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = map.get(queries[i]) ?? -1;
    }
    return queries;
}

describe('Main', () => {
    test('Case 1', () => {
        const intervals = [[1, 4], [2, 4], [3, 6], [4, 4]];
        expect(minInterval(intervals, [2, 3, 4, 5])).toStrictEqual([3, 3, 1, 4]);
    });
    test('Case 2', () => {
        const intervals = [[2, 3], [2, 5], [1, 8], [20, 25]];
        expect(minInterval(intervals, [2, 19, 5, 22])).toStrictEqual([2, -1, 4, 6]);
    });
});
