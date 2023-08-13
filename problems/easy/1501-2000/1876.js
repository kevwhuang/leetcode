// 1876 - Substrings of Size Three With Distinct Characters

function countGoodSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        s[i] !== s[i + 1]
            && s[i + 1] !== s[i + 2]
            && s[i + 2] !== s[i]
            && count++;
    }
    return count;
}
