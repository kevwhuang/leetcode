// 1446 - Consecutive Characters

function maxPower(s) {
    let power = 1, window = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) window++;
        else power = Math.max(window, power), window = 1;
    }
    return Math.max(power, window);
}
