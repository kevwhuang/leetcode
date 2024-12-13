// 435 - Non-Overlapping Intervals

function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let res = 0, prev;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] < prev) res++;
        else prev = intervals[i][1];
    }
    return res;
}
