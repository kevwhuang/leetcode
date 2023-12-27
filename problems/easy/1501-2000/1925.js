// 1925 - Count Square Sum Triples

function countTriples(n) {
    let triples = 0;
    const bound = n ** 2;
    loop: for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            const test = i ** 2 + j ** 2;
            if (test > bound) continue loop;
            if (Number.isInteger(Math.sqrt(test))) triples += 2;
        }
    }
    return triples;
}
