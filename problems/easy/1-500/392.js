// 392 - Is Subsequence

function isSubsequence(s, t) {
    const len1 = s.length, len2 = t.length;
    if (len1 > len2) return false;
    let i = -1, j = -1, cur;
    L: while (++i < len1) {
        cur = s[i];
        while (++j < len2) if (t[j] === cur) continue L;
        return false;
    }
    return true;
}
