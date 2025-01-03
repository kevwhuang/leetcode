// 461 - Hamming Distance

function hammingDistance(x, y) {
    let res = 0, xor = x ^ y;
    while (xor) {
        if (xor & 1) res++;
        xor >>= 1;
    }
    return res;
}
