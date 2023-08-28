// 1128 - Number of Equivalent Domino Pairs

function numEquivDominoPairs(dominoes) {
    const map = new Map();
    for (let i = 0, cur, key; i < dominoes.length; i++) {
        cur = dominoes[i];
        key = '' + Math.min(cur[0], cur[1]) + Math.max(cur[0], cur[1]);
        map.set(key, map.get(key) + 1 || 0);
    }
    const freqs = [...map.values()];
    let pairs = 0;
    for (let i = 0; i < freqs.length; i++) {
        pairs += (1 + freqs[i]) * freqs[i] / 2;
    }
    return pairs;
}
