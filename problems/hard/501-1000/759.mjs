// 759 - Employee Free Time

function employeeFreeTime(schedule) {
    const A = [];
    schedule.forEach(e => e.forEach(e => A.push(e)));
    A.sort((a, b) => a.start - b.start);
    const res = [];
    for (let i = 1, max = A[0].end; i < A.length; i++) {
        if (max < A[i].start) res.push(new Interval(max, A[i].start));
        max = Math.max(A[i].end, max);
    }
    return res;
}
