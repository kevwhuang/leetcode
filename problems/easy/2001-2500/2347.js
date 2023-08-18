// 2347 - Best Poker Hand

function bestHand(ranks, suits) {
    if (new Set(suits).size === 1) return 'Flush';
    const map = new Map();
    for (let i = 0; i < 5; i++) {
        let cur = map.get(ranks[i]) + 1;
        if (cur > 3) cur = 3;
        map.set(ranks[i], cur || 1);
    }
    const freqs = [...map.values()];
    if (freqs.includes(3)) return 'Three of a Kind';
    if (freqs.includes(2)) return 'Pair';
    return 'High Card';
}
