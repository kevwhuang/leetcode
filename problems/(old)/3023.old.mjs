// 3023 - Find Pattern in Infinite Stream I

function findPattern(stream, pattern) {
    let hash = BigInt(0), target = BigInt(0), mask = BigInt(0);
    for (let i = 0; i < pattern.length; i++) {
        hash = hash + hash + BigInt(stream.next());
        target = target + target + BigInt(pattern[i]);
        if (i < pattern.length - 1) mask = mask + mask + 1n;
    }
    let i = 0;
    while (hash !== target && ++i) {
        hash &= mask;
        hash = hash + hash + BigInt(stream.next());
    }
    return i;
}
