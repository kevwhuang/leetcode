// 392 - Is Subsequence

function isSubsequence(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    if (sLen > tLen) return false;
    let i = -1;
    let j = -1;
    let cur;
    loop: while (++i < sLen) {
        cur = s[i];
        while (++j < tLen) {
            if (t[j] === cur) continue loop;
        }
        return false;
    }
    return true;
}
