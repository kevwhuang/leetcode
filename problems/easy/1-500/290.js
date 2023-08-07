// 290 - Word Pattern

function wordPattern(pattern, s) {
    const A = s.split(' ');
    if (pattern.length !== A.length) return false;
    const M = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (M.has(pattern[i]) && M.get(pattern[i]) !== A[i]) return false;
        M.set(pattern[i], A[i]);
    }
    const values = [...M.values()];
    return values.length === new Set(values).size;
}
