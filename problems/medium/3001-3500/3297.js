// 3297 - Count Substrings That Can Be Rearranged to Contain a String I

function validSubstringCount(word1, word2) {
    String.prototype.code = String.prototype.charCodeAt;
    const a = word2, b = word1, m = a.length - 1, n = b.length;
    if (m > n) return 0;
    let res = 0, i = 0, l = 0, r = 0;
    const B = new Array(26).fill(0);
    while (i <= m) B[a.code(i++) - 97]--;
    while (r < m) B[b.code(r++) - 97]++;
    while (r < n) {
        B[b.code(r++) - 97]++;
        while (B[b.code(l) - 97] > 0) B[b.code(l++) - 97]--;
        if (B.every(e => e >= 0)) res += l + 1;
    }
    return res;
}
