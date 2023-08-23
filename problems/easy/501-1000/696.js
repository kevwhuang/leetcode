// 696 - Count Binary Substrings

function countBinarySubstrings(s) {
    let prev = 0;
    let cur = 1;
    let substrings = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) cur++;
        else {
            substrings += Math.min(cur, prev);
            prev = cur;
            cur = 1;
        }
    }
    return substrings + Math.min(cur, prev);
}
