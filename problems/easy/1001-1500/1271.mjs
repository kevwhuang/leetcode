// 1271 - Hexspeak

function toHexspeak(num) {
    const valid = new Set(['A', 'B', 'C', 'D', 'E', 'F', '0', '1']);
    const digits = Number(num).toString(16).toUpperCase().split('');
    for (let i = 0; i < digits.length; i++) {
        if (!valid.has(digits[i])) return 'ERROR';
        if (digits[i] === '0') digits[i] = 'O';
        else if (digits[i] === '1') digits[i] = 'I';
    }
    return digits.join('');
}
