// 1933 - Check If String Is Decomposable Into Value-Equal Substrings

function isDecomposable(s) {
    let seen = false, i = 0;
    while (i < s.length) {
        if (s[i] !== s[i + 1]) return false;
        if (s[i] === s[i + 2]) i += 3;
        else if (seen) return false;
        else (seen = true) && (i += 2);
    }
    return seen;
}
