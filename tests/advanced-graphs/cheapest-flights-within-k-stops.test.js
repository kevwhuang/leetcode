const findCheapestPrice = require('../../neetcode/advanced-graphs/cheapest-flights-within-k-stops');

describe('Main', () => {
    test('Case 1', () => {
        const flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
        expect(findCheapestPrice(4, flights, 0, 3, 1)).toStrictEqual(700);
    });

    test('Case 2', () => {
        const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
        expect(findCheapestPrice(3, flights, 0, 2, 1)).toStrictEqual(200);
    });

    test('Case 3', () => {
        const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
        expect(findCheapestPrice(3, flights, 0, 2, 0)).toStrictEqual(500);
    });
});
