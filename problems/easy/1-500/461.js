// 461 - Hamming Distance

function hammingDistance(x, y) {
    let distance = 0, xor = x ^ y;
    while (xor) {
        xor & 1 && distance++;
        xor >>>= 1;
    }
    return distance;
}
