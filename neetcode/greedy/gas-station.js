// 134 - Gas Station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

function canCompleteCircuit(gas, cost) {
    let res = 0, sum = 0, acc = 0, i = -1;
    while (++i < gas.length) {
        const d = gas[i] - cost[i];
        sum += d, acc += d;
        if (acc < 0) res = i + 1, acc = 0;
    }
    return sum < 0 ? -1 : res;
}

module.exports = canCompleteCircuit;
