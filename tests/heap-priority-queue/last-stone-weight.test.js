const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function lastStoneWeight(stones) {
    const mpq = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
        mpq.enqueue(stones[i]);
    }
    while (mpq.size() > 1) {
        const weight1 = mpq.dequeue();
        const weight2 = mpq.dequeue();
        weight1 !== weight2 && mpq.enqueue(Math.abs(weight1 - weight2));
    }
    return mpq.isEmpty() ? 0 : mpq.front();
}

describe('Main', () => {
    test('Case 1', () => {
        expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toStrictEqual(1);
    });

    test('Case 2', () => {
        expect(lastStoneWeight([1])).toStrictEqual(1);
    });
});
