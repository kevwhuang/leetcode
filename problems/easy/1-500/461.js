// 461 - Hamming Distance

function hammingDistance(x, y) {
    let xor = x ^ y,
        distance = 0;
    while (xor) {
        xor & 1 && distance++;
        xor >>>= 1;
    }
    return distance;
}
