// 854 - K-Similar Strings

function kSimilarity(s1, s2) {
    if (s1 === s2) return 0;
    let res = 1, Q = [s1];
    const seen = new Set(Q);
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const t = Q[i];
            let j = 0;
            while (t[j] === s2[j]) j++;
            const a = t[j], b = s2[j], left = t.slice(0, j);
            let k = j;
            while (++k < s1.length) {
                if (t[k] === s2[k] || t[k] !== b) continue;
                const mid = t.slice(j + 1, k), right = t.slice(k + 1);
                const next = left + b + mid + a + right;
                if (next === s2) return res;
                if (seen.has(next)) continue;
                seen.add(next);
                N.push(next);
            }
        }
        res++, Q = N;
    }
}
