// 2423 - Remove Letter to Equalize Frequency

function equalFrequency(word) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        freq[word.charCodeAt(i) - 97]++;
    }
    const map = new Map();
    for (let i = 0; i < 26; i++) {
        freq[i] && map.set(freq[i], map.get(freq[i]) + 1 || 1);
    }
    if (map.size > 2) return false;
    if (map.get(1) === 1) return true;
    if (map.size === 1) return map.has(1) || [...map.values()][0] === 1;
    const A = [...map.entries()].sort((a, b) => b[0] - a[0]);
    if (A[0][0] - A[1][0] !== 1 || A[0][1] > A[1][1]) return false;
    return A[0][1] === 1 || A[1][1] === 1;
}
