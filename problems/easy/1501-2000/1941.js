// 1941 - Check If All Characters Have Equal Number of Occurrences

function areOccurrencesEqual(s) {
    const freq = new Map();
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], freq.get(s[i]) + 1 || 1);
    }
    return new Set(freq.values()).size === 1;
}
