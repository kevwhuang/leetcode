// 253 - Meeting Rooms II

function minMeetingRooms(intervals) {
    const starts = intervals.sort((a, b) => a[0] - b[0]);
    const ends = intervals.map(e => e[1]).sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i][0] >= ends[j]) j++;
    }
    return intervals.length - j;
}
