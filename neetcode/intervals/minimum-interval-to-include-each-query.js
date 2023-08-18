// 1851 - Minimum Interval to Include Each Query

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */

function minInterval(intervals, queries) {
    const comparator = (a, b) => a[0] - b[0] || a[1] - b[1];
    intervals.sort((a, b) => a[0] - b[0]);
    const arr = new Uint32Array(queries).sort();
    const pq = new PriorityQueue({ compare: comparator });
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

module.exports = minInterval;
