// 57 - Insert Interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

function insert(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const prev = res.at(-1), cur = intervals[i];
        if (prev[1] < cur[0]) res.push(cur);
        else prev[1] = Math.max(cur[1], prev[1]);
    }
    return res;
}

module.exports = insert;
