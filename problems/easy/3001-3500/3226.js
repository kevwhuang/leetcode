// 3226 - Number of Bit Changes to Make Two Integers Equal

function minChanges(n, k) {
    let ops = 0;
    while (n && k) {
        if (!(n & 1) && k & 1) return -1;
        if ((n & 1) && !(k & 1)) ops++;
        n >>= 1, k >>= 1;
    }
    if (k) return -1;
    while (n) {
        if (n & 1) ops++;
        n >>= 1;
    }
    return ops;
}
