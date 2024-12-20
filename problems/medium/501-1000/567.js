// 567 - Permutation in String

function checkInclusion(s1, s2) {
    const m = s1.length, n = s2.length;
    if (m > n) return false;
    const B = new Int16Array(26);
    for (let i = 0; i < m; i++) {
        B[s1.charCodeAt(i) - 97]++;
        B[s2.charCodeAt(i) - 97]--;
    }
    let acc = B.reduce((s, e) => s + (e > 0), 0);
    for (let i = m; i < n; i++) {
        if (acc === 0) return true;
        if (--B[s2.charCodeAt(i) - 97] === 0) acc--;
        if (B[s2.charCodeAt(i - m) - 97]++ === 0) acc++;
    }
    return acc === 0;
}
