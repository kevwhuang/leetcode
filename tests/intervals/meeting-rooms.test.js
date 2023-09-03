const canAttendMeetings = require('../../neetcode/intervals/meeting-rooms');

describe('Main', () => {
    test('Case 1', () => {
        expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBeFalsy();
    });

    test('Case 2', () => {
        expect(canAttendMeetings([[7, 10], [2, 4]])).toBeTruthy();
    });
});
