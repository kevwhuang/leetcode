// 3023 - Find Pattern in Infinite Stream I

function findPattern(stream, pattern) {
    let hash = BigInt(0), tgt = BigInt(0), mask = BigInt(0);
    for (let i = 0; i < pattern.length; i++) {
        hash = 2n * hash + BigInt(stream.next());
        tgt = 2n * tgt + BigInt(pattern[i]);
        if (i < pattern.length - 1) mask = 2n * mask + 1n;
    }
    let i = 0;
    while (hash !== tgt && ++i) {
        hash &= mask;
        hash = 2n * hash + BigInt(stream.next());
    }
    return i;
}
