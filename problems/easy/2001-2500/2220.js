// 2220 - Minimum Bit Flips to Convert Number

function minBitFlips(start, goal) {
    const xor = (start ^ goal).toString(2);
    let flips = 0;
    for (let i = 0; i < xor.length; i++) {
        xor[i] === '1' && flips++;
    }
    return flips;
}
