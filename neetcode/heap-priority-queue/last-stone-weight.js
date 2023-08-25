// 1046 - Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 */

function lastStoneWeight(stones) {
    const mpq = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
        mpq.enqueue(stones[i]);
    }
    while (mpq.size() > 1) {
        const weight1 = mpq.dequeue().element;
        const weight2 = mpq.dequeue().element;
        weight1 !== weight2 && mpq.enqueue(Math.abs(weight1 - weight2));
    }
    return mpq.isEmpty() ? 0 : mpq.front().element;
}

module.exports = lastStoneWeight;
