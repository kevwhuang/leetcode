/**
 * @param {number[]} stones
 * @return {number}
 */

module.exports = function lastStoneWeight(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const stone1 = stones[stones.length - 1];
        const stone2 = stones[stones.length - 2];
        if (stone1 !== stone2) stones.unshift(stone1 - stone2);
        stones = stones.slice(0, stones.length - 2);
    }
    return stones.length ? stones[0] : 0;
};
