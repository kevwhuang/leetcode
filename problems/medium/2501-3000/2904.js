// 2904 - Shortest and Lexicographically Smallest Beautiful String

function shortestBeautifulSubstring(s, k) {
    let substring;
    for (let i = 0; i < s.length - k + 1; i++) {
        let ones = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] === '1') ones++;
            if (ones !== k) continue;
            const len = j - i + 1;
            if (substring && len > substring.length) break;
            const slice = s.slice(i, j + 1);
            if (!substring || len < substring.length || slice < substring) {
                substring = slice;
            }
            break;
        }
    }
    return substring ?? '';
}
