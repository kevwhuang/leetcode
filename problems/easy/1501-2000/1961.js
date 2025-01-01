// 1961 - Check If String Is a Prefix of Array

function isPrefixString(s, words) {
    let idx = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (s[idx++] !== words[i][j]) return false;
        }
        if (idx === s.length) return true;
        if (idx > s.length) return false;
    }
    return idx === s.length;
}
