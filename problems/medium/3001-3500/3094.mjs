// 3094 - Guess the Number Using Bitwise Questions II

function findNumber() {
    let n = 0, num = 1;
    for (let bit = 0; bit <= 29; bit++, num *= 2) {
        if (commonBits(num) > commonBits(num)) n += num;
    }
    return n;
}
