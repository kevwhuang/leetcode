// 1446 - Consecutive Characters

function maxPower(s) {
    let window = 1,
        power = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            window++;
        } else {
            power = Math.max(window, power);
            window = 1;
        }
    }
    return Math.max(window, power);
}
