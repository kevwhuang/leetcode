// 202 - Happy Number

function isHappy(n) {
    const set = new Set([n]);
    while (n > 1) {
        let acc = 0;
        while (n) acc += (n % 10) ** 2, n = n / 10 >> 0;
        if (set.has(acc)) return false;
        set.add(n = acc);
    }
    return true;
}
