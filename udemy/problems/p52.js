// 52 - Radix Sort Helper - getDigit

function getDigit(num, digit) {
    return ~~(num / Math.pow(10, digit)) % 10;
}
