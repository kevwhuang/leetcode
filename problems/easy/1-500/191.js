// 191 - Number of 1 Bits

function hammingWeight(n) {
    let count = 0;
    while (n) {
        n & 1 && count++;
        n >>>= 1;
    }
    return count;
}
