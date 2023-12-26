const findItinerary = require('../../neetcode/advanced-graphs/reconstruct-itinerary');

describe('Main', () => {
    test('Case 1', () => {
        const tickets = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']];
        expect(findItinerary(tickets)).toStrictEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);
    });
    test('Case 2', () => {
        const tickets = [
            ['JFK', 'SFO'],
            ['JFK', 'ATL'],
            ['SFO', 'ATL'],
            ['ATL', 'JFK'],
            ['ATL', 'SFO'],
        ];
        expect(findItinerary(tickets)).toStrictEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
    });
});
