// 56 - Merge Intervals

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res.at(-1)[1]) res.push(intervals[i]);
        else res.at(-1)[1] = Math.max(intervals[i][1], res.at(-1)[1]);
    }
    return res;
}
