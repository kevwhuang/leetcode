// 2564 - Substring XOR Queries

function substringXorQueries(s, queries) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (!map.has(0)) map.set(0, i);
            continue;
        }
        let num = 0;
        const bound = Math.min(i + 30, s.length);
        for (let j = i; j < bound; j++) {
            num <<= 1;
            if (s[j] === '1') num++;
            if (!map.has(num)) map.set(num, i);
        }
    }
    for (let i = 0; i < queries.length; i++) {
        const xor = queries[i][0] ^ queries[i][1];
        const idx = map.get(xor);
        if (!map.has(xor)) queries[i][0] = queries[i][1] = -1;
        else if (!xor) queries[i][0] = queries[i][1] = idx;
        else queries[i][0] = idx, queries[i][1] = idx + 31 - Math.clz32(xor);
    }
    return queries;
}
