// 771 - Jewels and Stones

function numJewelsInStones(jewels, stones) {
    const set = new Set(jewels);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        set.has(stones[i]) && count++;
    }
    return count;
}
