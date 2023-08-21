// 1933 - Check If String Is Decomposable Into Value-Equal Substrings

function isDecomposable(s) {
    let has2 = false;
    for (let i = 0; i < s.length;) {
        if (s[i] === s[i + 1]) {
            if (s[i] === s[i + 2]) {
                i += 3;
            } else {
                if (has2) {
                    return false;
                } else {
                    has2 = true;
                    i += 2;
                }
            }
        } else {
            return false;
        }
    }
    return has2;
}
