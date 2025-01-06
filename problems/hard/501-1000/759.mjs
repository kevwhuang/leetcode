// 759 - Employee Free Time

function employeeFreeTime(schedule) {
    const M = [];
    schedule.forEach(e => e.forEach(f => M.push(f)));
    M.sort((a, b) => a.start - b.start);
    const res = [];
    for (let i = 1, max = M[0].end; i < M.length; i++) {
        if (max < M[i].start) res.push(new Interval(max, M[i].start));
        max = Math.max(M[i].end, max);
    }
    return res;
}
