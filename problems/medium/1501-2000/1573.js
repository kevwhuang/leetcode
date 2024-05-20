// 1573 - Number of Ways to Split a String

function numWays(s) {
    let ones = 0, len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === '1') ones++;
    }
    const mod = 1_000_000_007;
    if (ones === 0) return (len - 1) * (len - 2) / 2 % mod;
    if (ones % 3) return 0;
    const tgt = ones / 3;
    let idx1 = -1, count1 = 0;
    while (count1 < tgt) {
        if (s[++idx1] === '1') count1++;
    }
    let idx4 = len, count2 = 0;
    while (count2 < tgt) {
        if (s[--idx4] === '1') count2++;
    }
    const idx2 = s.indexOf('1', idx1 + 1);
    const idx3 = s.lastIndexOf('1', idx4 - 1);
    return (idx2 - idx1) * (idx4 - idx3) % mod;
}
