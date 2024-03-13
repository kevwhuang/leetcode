// 846 - Hand of Straights

function isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize) return false;
    hand.sort((a, b) => a - b);
    if (hand[0] + groupSize - 1 > hand.at(-1)) return false;
    const map = new Map();
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1);
    }
    for (let i = 0; i < hand.length; i++) {
        const cur = hand[i];
        if (map.get(cur) === 0) continue;
        let size = -1;
        while (++size < groupSize) {
            if (!map.get(cur + size)) return false;
            map.set(cur + size, map.get(cur + size) - 1);
        }
    }
    return true;
}
