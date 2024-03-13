// 134 - Gas Station

function canCompleteCircuit(gas, cost) {
    let total = 0, cur = 0, start = 0;
    for (let i = 0; i < gas.length; i++) {
        const net = gas[i] - cost[i];
        total += net;
        cur += net;
        if (cur >= 0) continue;
        start = i + 1;
        cur = 0;
    }
    return total >= 0 ? start : -1;
}
