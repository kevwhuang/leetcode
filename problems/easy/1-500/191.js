// 191 - Number of 1 Bits

function hammingWeight(n) {
    let res = 0;
    while (n) {
        if (n & 1) res++;
        n >>= 1;
    }
    return res;
}
