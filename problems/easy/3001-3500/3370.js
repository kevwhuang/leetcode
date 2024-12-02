// 3370 - Smallest Number With All Set Bits

function smallestNumber(n) {
    const arr = [1, 3, 7, 15, 31, 63, 127, 255, 511, 1023];
    return arr.find(e => e >= n);
}
