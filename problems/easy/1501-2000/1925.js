// 1925 - Count Square Sum Triples

function countTriples(n) {
    let triples = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const test = Math.sqrt(i * i + j * j);
            if (test > n) break;
            if (Number.isInteger(test)) triples += 2;
        }
    }
    return triples;
}
