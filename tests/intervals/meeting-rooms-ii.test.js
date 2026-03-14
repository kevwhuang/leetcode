const minMeetingRooms = require('../../neetcode/intervals/meeting-rooms-ii');

describe('Main', () => {
    test('Case 1', () => {
        expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toStrictEqual(2);
    });
    test('Case 2', () => {
        expect(minMeetingRooms([[7, 10], [2, 4]])).toStrictEqual(1);
    });
});
