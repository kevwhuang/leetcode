// 252 - Meeting Rooms

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i - 1][1] > intervals[i][0]) return false;
    }
    return true;
}

module.exports = canAttendMeetings;
