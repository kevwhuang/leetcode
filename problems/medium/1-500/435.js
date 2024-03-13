// 435 - Non-Overlapping Intervals

function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let removed = 0;
    for (let i = 0, bound = -Infinity; i < intervals.length; i++) {
        if (intervals[i][0] < bound) removed++;
        else bound = intervals[i][1];
    }
    return removed;
}
