// 2595 - Number of Even and Odd Bits

function evenOddBit(n) {
    let even = 0;
    let odd = 0;
    let isEven = true;
    while (n) {
        n & 1 && (isEven ? even++ : odd++);
        n >>= 1;
        isEven = !isEven;
    }
    return [even, odd];
}
