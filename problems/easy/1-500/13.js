// 13 - Roman to Integer

function romanToInt(s) {
    const values = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000,
    };
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        values[s[i]] < values[s[i + 1]]
            ? (int -= values[s[i]])
            : (int += values[s[i]]);
    }
    return int;
}
