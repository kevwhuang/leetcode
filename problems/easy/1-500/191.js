// 191 - Number of 1 Bits

function hammingWeight(n) {
    let res = 0;
    while (n) res += n & 1, n >>= 1;
    return res;
}
