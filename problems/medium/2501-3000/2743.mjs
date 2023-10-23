// 2743 - Count Substrings Without Repeating Character

function numberOfSpecialSubstrings(s) {
    let substrs = 0, l = 0, r = -1;
    const freqs = new Array(26).fill(0);
    while (++r < s.length) {
        const code = s.charCodeAt(r) - 97;
        freqs[code]++;
        while (freqs[code] > 1) {
            freqs[s.charCodeAt(l++) - 97]--;
        }
        substrs += r - l + 1;
    }
    return substrs;
}
