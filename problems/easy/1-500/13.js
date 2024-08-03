// 13 - Roman to Integer

function romanToInt(s) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let int = values[s[s.length - 1]];
    for (let i = 1; i < s.length; i++) {
        const val = values[s[i - 1]];
        if (val < values[s[i]]) int -= val;
        else int += val;
    }
    return int;
}
