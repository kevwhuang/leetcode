// 66 - Plus One

function plusOne(digits) {
    digits = String(BigInt(digits.join('')) + 1n).split('');
    for (let i = 0; i < digits.length; i++) {
        digits[i] = Number(digits[i]);
    }
    return digits;
}
