// 3 - Frequency Counter - sameFrequency

function sameFrequency(int1, int2) {
    const map = new Map();
    while (int1) {
        const digit = int1 % 10;
        int1 = Math.floor(int1 / 10);
        map.set(digit, map.get(digit) + 1 || 1);
    }
    while (int2) {
        const digit = int2 % 10;
        int2 = Math.floor(int2 / 10);
        const freq = map.get(digit);
        if (!freq) return false;
        map.set(digit, freq - 1);
    }
    return true;
}
